import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import Tile from "./tile.component";

const Container = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 6;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: stretch;
  background-color: #1a1423;
  ${(props) => (props.modalOpen ? "filter: blur(4px)" : null)};
`;

const TileContainer = (props) => {
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
            ></Tile>
          ))
        ) : (
          <h1>LOading</h1>
        )}
      </Container>
    </Fragment>
  );
};

export default TileContainer;
