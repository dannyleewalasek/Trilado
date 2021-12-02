import styled from "styled-components";
import NavItem from "./navitem.component";

import { Link } from "react-router-dom";

const Nav = styled.div`
  height: 100vh;
  flex-basis: 15%;
  background-color: #372549;
  padding: 64px 0 0 0;
  //   position: sticky;
  //   left: 0;
  //   top: 0;
  //   box-sizing: border-box;
`;

const Navigation = () => {
  return (
    <Nav>
      <NavItem title="New Releases" to={"/"} />
      <NavItem title="Trending" to={"/home"} />
      <NavItem title="Film" to={"/home"} />
    </Nav>
  );
};

export default Navigation;
