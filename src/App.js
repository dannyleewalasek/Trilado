import "./App.css";
import TileContainer from "./components/tile-container.component";
import Modal from "./components/modal.component";
import SearchBar from "./components/search-bar.component";
import Intromodalcontent from "./components/intromodal.component";
import Recommendations from "./components/recommendations.component";
import Navigation from "./components/navigation.component";
import React, { useReducer, useEffect } from "react";
import { AppContext } from "./context";
import styled from "styled-components";
import { Fragment } from "react/cjs/react.production.min";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return state.likes.length === 10
        ? {
            ...state,
            likes: [...state.likes, action.payload],
            modal: !state.modal,
          }
        : { ...state, likes: [...state.likes, action.payload] };
    case "DISLIKE":
      return { ...state, dislikes: [...state.dislikes, action.payload] };
    case "FILM":
      return { ...state, films: [...state.films, ...action.payload] };
    case "TOGGLEMODAL":
      return { ...state, modal: !state.modal };
    case "REMOVEFILM":
      return {
        ...state,
        films: state.films.reduce((memo, iter) => {
          return iter.id !== action.payload ? memo.concat(iter) : memo;
        }, []),
      };
    case "SEARCH":
      return { ...state, searchItems: action.payload };
  }
};

const initialState = {
  likes: [],
  dislikes: [],
  films: [],
  modal: true,
  searchItems: [],
  recommendations: undefined,
};

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  opacity: 1;
`;

const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #f83847;
  position: sticky;
  top: 0;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 15%;
  color: white;
`;

const Search = styled.div`
  flex-basis: 85%;
  background-color: #774c60;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`http://localhost:3000/frequent`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch({
          type: "FILM",
          payload: response !== undefined ? response : [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ dispatch }}>
        <Fragment>
          {state.modal ? (
            <Modal>
              {state.likes.length === 10 ? (
                <Recommendations />
              ) : (
                <Intromodalcontent />
              )}
            </Modal>
          ) : null}
          <Header>
            <Title>Trilado</Title>
            <Search>
              <SearchBar></SearchBar>
            </Search>
          </Header>
          <Main>
            <Navigation></Navigation>
            <Routes>
              <Route
                path="/"
                element={
                  <TileContainer
                    films={
                      state.searchItems.length > 0
                        ? state.searchItems
                        : state.films
                    }
                    title={"New Releases"}
                    modalOpen={state.modal}
                  ></TileContainer>
                }
              />
              <Route
                exact
                path="/trending"
                element={
                  <TileContainer
                    films={
                      state.searchItems.length > 0
                        ? state.searchItems
                        : state.films
                    }
                    title={"New Releases"}
                    modalOpen={state.modal}
                  ></TileContainer>
                }
              />
              <Route
                exact
                path="/recommendations"
                element={<h1>recommendations</h1>}
              />
            </Routes>
          </Main>
        </Fragment>
      </AppContext.Provider>
    </div>
  );
}

export default App;
