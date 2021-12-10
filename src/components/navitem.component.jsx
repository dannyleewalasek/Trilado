import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  transition: 0.5s;
  &:hover {
    background-color: #222b30;
  }
  background-color: ${(props) => (props.selected ? "#222b30" : "inherit")};
`;

const NavItem = ({ title, to, active }) => {
  return (
    <Item selected={active}>
      <Link to={to}>{title}</Link>
    </Item>
  );
};

export default NavItem;
