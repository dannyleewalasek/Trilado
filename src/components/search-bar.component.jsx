import styled from "styled-components";
import React from "react";
import { AppContext } from "../context";
import { useContext } from "react";

const searchFilms = async (title, dispatcher) => {
  fetch(`http://localhost:3000/search?query=${title}`)
    .then((response) => response.json())
    .then((response) => {
      dispatcher({
        type: "SEARCH",
        payload: title === "" ? [] : response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const Input = styled.input`
  width: 10%;
  height: 30px;
  top: 16px;
  left: 45%;
  background-color: white;
  border-radius: 8px;
  position: fixed;
  z-index: 20;
  border: 0;
  transition: 0.5s;
  opacity: 0.9;

  &:focus {
    width: 30%;
    left: 35%;
    opacity: 1;
  }
`;

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Input onChange={(e) => searchFilms(e.target.value, dispatch)}></Input>
  );
};

export default SearchBar;
