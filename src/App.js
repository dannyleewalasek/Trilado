import "./App.css";
import TileContainer from "./components/main/tile-container.component";
import Modal from "./components/modal/modal.component";
import SearchBar from "./components/header/search-bar.component";
import Recommendations from "./components/recommendations.component";
import Navigation from "./components/navigation/navigation.component";
import React, { useReducer, useEffect } from "react";
import { AppContext } from "./context";
import Header from "./components/header/header.component";
import styled from "styled-components";
import { Fragment } from "react/cjs/react.production.min";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        //THIS DOESNT WORK, due to comparing objects
        likes: state.likes.includes(action.payload)
          ? state.likes
          : [...state.likes, action.payload],
      };
    case "CHANGEPAGE":
      return { ...state, page: action.payload };
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
  page: "/",
};

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  opacity: 1;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`https://trilado-api.herokuapp.com/frequent`)
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
          {state.modal ? <Modal /> : null}
          <Header>
            <SearchBar></SearchBar>
          </Header>
          <Main>
            <Navigation page={state.page}></Navigation>
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
              <Route
                exact
                path="/history"
                element={
                  <TileContainer
                    films={state.likes}
                    title={"History"}
                  ></TileContainer>
                }
              />
            </Routes>
          </Main>
        </Fragment>
      </AppContext.Provider>
    </div>
  );
}

export default App;
