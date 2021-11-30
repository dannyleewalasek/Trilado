import styled from "styled-components";
import { AppContext } from "../context";
import { useContext } from "react";

const ContinueButton = styled.button`
  width: 300px;
  height: 50px;
`;

const Intromodalcontent = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <ContinueButton onClick={() => dispatch({ type: "TOGGLEMODAL" })}>
      {" "}
      Let's find a movie!
    </ContinueButton>
  );
};

export default Intromodalcontent;
