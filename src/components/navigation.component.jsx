import styled from "styled-components";
import { AppContext } from "../context";
import { useContext } from "react";
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

const Navigation = ({ page }) => {
  const { dispatch } = useContext(AppContext);
  return (
    <Nav>
      <Item
        selected={page === "/" ? true : false}
        onClick={() => dispatch({ type: "CHANGEPAGE", payload: "/" })}
      >
        <Link to={"/"}>New Releases</Link>
      </Item>
      <Item
        selected={page === "/trending" ? true : false}
        onClick={() => dispatch({ type: "CHANGEPAGE", payload: "/trending" })}
      >
        <Link to={"/trending"}>Trending</Link>
      </Item>
      <Item
        selected={page === "/recommendations" ? true : false}
        onClick={() =>
          dispatch({ type: "CHANGEPAGE", payload: "/recommendations" })
        }
      >
        <Link to={"/recommendations"}>Reccomendations</Link>
      </Item>
      <Item
        selected={page === "/history" ? true : false}
        onClick={() => dispatch({ type: "CHANGEPAGE", payload: "/history" })}
      >
        <Link to={"/history"}>History</Link>
      </Item>
    </Nav>
  );
};
export default Navigation;
