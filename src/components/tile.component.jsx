import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";
import { useContext } from "react";

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 1s;
  display: flex;
  flex-direction: column;
`;

const LikeButton = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 8px;
`;

const FilmTile = styled.div`
  margin: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  width: 10vw;
  height: 15vw;
  background-image: url(${(props) =>
    '"https://image.tmdb.org/t/p/original/' + props.poster}");
  background-size: cover;
  position: relative;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 768px) {
    width: 40vw;
    height: 60vw;
  }
  @media (min-width: 768px) {
    &:hover ${Overlay} {
      opacity: 0.8;
    }
    &:hover {
      // transform: scale(1.1);
      z-index: 10;
      filter: drop-shadow(0 0 0.75rem black);
      border: 0px;
    }
  }
`;

const LoadingSpinner = styled.div`
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Tile = ({ poster, name, id }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <FilmTile
      poster={poster}
      onClick={() => dispatch({ type: "LIKE", payload: id })}
    >
      <Overlay>
        <LikeButton
          color={"green"}
          onClick={() => dispatch({ type: "REMOVEFILM", payload: id })}
        ></LikeButton>
        <LikeButton
          color={"red"}
          onClick={() => dispatch({ type: "DISLIKE", payload: id })}
        ></LikeButton>
      </Overlay>
    </FilmTile>
  );
};

export default Tile;
