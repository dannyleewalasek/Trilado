import styled from "styled-components";
import Tile from "./tile.component";

const Container = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100vw;
  justify-content: center;
  align-content: stretch;
  ${(props) => (props.modalOpen ? "filter: blur(4px)" : null)};
  @media (max-width: 768px) {
  }
`;

const TileContainer = (props) => {
  console.log(props.films);
  return (
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
  );
};

export default TileContainer;
