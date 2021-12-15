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
  boz-sizing: border-box;
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
  border-left: ${(props) => (props.selected ? "4px solid red" : "none")};
`;

const Navigation = ({ page }) => {
  const { dispatch } = useContext(AppContext);
  return (
    <Nav>
      <Link to={"/"}>
        <Item
          selected={page === "/" ? true : false}
          onClick={() => dispatch({ type: "CHANGEPAGE", payload: "/" })}
        >
          New Releases
        </Item>
      </Link>
      <Link to={"/trending"}>
        <Item
          selected={page === "/trending" ? true : false}
          onClick={() => dispatch({ type: "CHANGEPAGE", payload: "/trending" })}
        >
          Trending
        </Item>
      </Link>
      <Link to={"/recommendations"}>
        <Item
          selected={page === "/recommendations" ? true : false}
          onClick={() =>
            dispatch({ type: "CHANGEPAGE", payload: "/recommendations" })
          }
        >
          Reccomendations
        </Item>
      </Link>
      <Link to={"/history"}>
        <Item
          selected={page === "/history" ? true : false}
          onClick={() => dispatch({ type: "CHANGEPAGE", payload: "/history" })}
        >
          History
        </Item>
      </Link>
    </Nav>
  );
};
export default Navigation;
