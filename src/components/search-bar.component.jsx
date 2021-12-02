import styled from "styled-components";
import React from "react";
import { AppContext } from "../context";
import { useContext } from "react";

const searchFilms = async (title, dispatcher) => {
  title === ""
    ? dispatcher({ type: "SEARCH", payload: [] })
    : fetch(`http://localhost:3000/search?query=${title}`)
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
  height: 30px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  border: 0;
  transition: 0.5s;
  opacity: 0.9;
  background-color: #774c60;
  box-sizing: border-box;
  flex-basis: 80%;
`;

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Input onChange={(e) => searchFilms(e.target.value, dispatch)}></Input>
  );
};

export default SearchBar;
