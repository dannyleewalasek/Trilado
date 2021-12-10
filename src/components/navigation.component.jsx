import styled from "styled-components";
import NavItem from "./navitem.component";

import { Link } from "react-router-dom";

const Nav = styled.div`
  height: 100vh;
  flex-basis: 15%;
  background-color: #191d20;
  padding: 64px 0 0 0;
  position: sticky;
  left: 0;
  top: 0;
  box-sizing: border-box;
  color: white;
  a {
    color: white;
  }
  &:hover {
    width: 500px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  background-color: #191d20;
  align-items: center;
  width: 100%;
  height: 5vh;
  transition: 0.5s;
  &:hover {
    background-color: #222b30;
  }
  background-color: ${(props) => (props.selected ? "#222b30" : "inherit")};
`;

let newActive = true,
  trendingActive = false,
  filmActive = false;

const Navigation = () => {
  return (
    <Nav>
      <Item selected={newActive} onClick={() => changeActive("new")}>
        <Link to={"/"}>New Releases</Link>
      </Item>
      <Item selected={trendingActive} onClick={() => changeActive("trending")}>
        <Link to={"/trending"}>New Trending</Link>
      </Item>
      <Item selected={filmActive} onClick={() => changeActive("film")}>
        <Link to={"/recommendations"}>Film</Link>
      </Item>
    </Nav>
  );
};

const changeActive = (selected) => {
  console.log("hit");
  newActive = false;
  trendingActive = false;
  filmActive = false;
  switch (selected) {
    case "new":
      newActive = true;
    case "trending":
      trendingActive = true;
    case "film":
      filmActive = true;
  }
};

export default Navigation;
