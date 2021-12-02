import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  height: 30px;
  background-color: blue;
  transition: 0.5s;
  &:hover {
    background-color: green;
  }
`;

const NavItem = ({ title, to }) => {
  return (
    <Item>
      <Link to={to}>{title}</Link>
    </Item>
  );
};

export default NavItem;
