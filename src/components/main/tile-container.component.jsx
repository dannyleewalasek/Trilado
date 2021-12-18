import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import Tile from "./tile.component";

const Container = styled.div`
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
} 

  animation-duration: 1s;
  animation-name: fadeIn;
  padding:64px;
  display: flex;
  justify-content: flex-end;
  align-items: stretch
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 85%;
  width: 100vw;
  gap: 32px;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-content: stretch;
  background-color: #222b30;
  ${(props) => (props.modalOpen ? "filter: blur(4px)" : null)};
`;

export default function TileContainer(props) {
  console.log(props.films);
  return (
    <Fragment>
      <Container modalOpen={props.modalOpen}>
        {props.Films !== [] ? (
          props.films.map((film) => (
            <Tile
              key={film.id}
              id={film.id}
              title={film.original_title}
              poster={film.poster_path}
              release_date={film.release_date}
            ></Tile>
          ))
        ) : (
          <h1>LOading</h1>
        )}
      </Container>
    </Fragment>
  );
}
