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
import curtains from "../src/curtains.jpeg";
import { Fragment } from "react/cjs/react.production.min";

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

const Curtains = styled.div`
  background-image: url(${curtains});
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  transition: 2s;
  ${(props) =>
    !props.open ? `transform: translateX(` + props.direction + "%)" : null}
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  background-color: #b75d69;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 1;
  box-sizing: border-box;
`;

const rootRef = React.createRef();
let observer;

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
            <SearchBar></SearchBar>
          </Header>
          <Main>
            <Navigation></Navigation>
            <TileContainer
              films={
                state.searchItems.length > 0 ? state.searchItems : state.films
              }
              title={"New Releases"}
              modalOpen={state.modal}
              ref={rootRef}
            ></TileContainer>
          </Main>
        </Fragment>
      </AppContext.Provider>
    </div>
  );
}

export default App;
