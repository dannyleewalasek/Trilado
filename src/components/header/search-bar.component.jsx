import styled from "styled-components";
import React from "react";
import { AppContext } from "../../context";
import { useContext } from "react";

const searchFilms = async (title, dispatcher) => {
  title === ""
    ? dispatcher({ type: "SEARCH", payload: [] })
    : fetch(`https://trilado-api.herokuapp.com/search?query=${title}`)
        .then((response) => response.json())
        .then((response) => {
          dispatcher({
            type: "SEARCH",
            payload: response,
          });
        })
        .catch((err) => {
          console.log(err);
        });
};

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: 0;
  transition: 0.5s;
  opacity: 0.9;
  background-color: #ff4150;
  box-sizing: border-box;
  flex-basis: 80%;
  padding: 16px;
  color: white;
  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Input
      onChange={(e) => searchFilms(e.target.value, dispatch)}
      placeholder="&#x1F50D;"
    ></Input>
  );
};

export default SearchBar;
