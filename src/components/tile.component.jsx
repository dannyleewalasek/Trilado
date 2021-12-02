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

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 8px;
  text-align: left;
  flex-basis: 15%;
`;

const FilmTile = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${(props) =>
    '"https://image.tmdb.org/t/p/original/' + props.poster}");
  background-size: cover;
  position: relative;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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

const Tile = ({ poster, name, id, title, release_date }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <TileContainer>
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
      <h2>{title}</h2>
      <h2>{release_date}</h2>
    </TileContainer>
  );
};

export default Tile;
