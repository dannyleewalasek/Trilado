import { Fragment } from "react/cjs/react.production.min";
import SearchBar from "./search-bar.component";
import styled from "styled-components";

const HeaderStyle = styled.div`
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

export default function Header() {
  return (
    <HeaderStyle>
      <Title>Trilado</Title>
      <SearchBar></SearchBar>
    </HeaderStyle>
  );
}
