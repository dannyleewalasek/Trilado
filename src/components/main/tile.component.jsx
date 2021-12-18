import React from "react";
import styled from "styled-components";
import { AppContext } from "../../context";
import { useContext } from "react";

const LikeButton = styled.div`
  position: absolute;
  bottom: 5%;
  left: 10%;
  height: 10%;
  width: 10%;
  background-color: #774c60;
  border-radius: 50%;
  transition: 0.5s;
`;

const DislikeButton = styled.div`
  position: absolute;
  bottom: 5%;
  right: 10%;
  height: 10%;
  width: 10%;
  background-color: #774c60;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    background-color: #f83847;
  }
`;

const TileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 8px;
  text-align: left;
  height: 370px;
  width: 200px;
  animation-duration: 2s;
  animation-name: example;
  @keyframes example {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
`;

const FilmTile = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) =>
    '"https://image.tmdb.org/t/p/w300/' + props.poster}");
  background-size: cover;
  position: relative;
  transition: 0.5s;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 768px) {
    width: 40vw;
    height: 60vw;
  }
  @media (min-width: 768px) {
    &:hover {
      z-index: 10;
      filter: drop-shadow(0 0 0.75rem black);
      ${LikeButton}, ${DislikeButton} {
        transform: scale(1.4);
      }
    }
  }
`;

export default function Tile({ poster, name, id, title, release_date }) {
  const { dispatch } = useContext(AppContext);

  return (
    <TileContainer>
      <FilmTile poster={poster}>
        <DislikeButton
          onClick={() => {
            dispatch({
              type: "DISLIKE",
              payload: { id, title, release_date, poster_path: poster },
            });
            dispatch({
              type: "REMOVEFILM",
              payload: id,
            });
          }}
        ></DislikeButton>
        <LikeButton
          onClick={() =>
            setTimeout(() => {
              //MAYBE REMOVE THIS LATER, WILL BE GOOD FOR ANIMATIONS TO HAVE A DELAY
              dispatch({
                type: "LIKE",
                payload: { id, title, release_date, poster_path: poster },
              });
              dispatch({
                type: "REMOVEFILM",
                payload: id,
              });
            }, 2000)
          }
        ></LikeButton>
      </FilmTile>
      <h2>{title}</h2>
      <h2>{release_date}</h2>
    </TileContainer>
  );
}
