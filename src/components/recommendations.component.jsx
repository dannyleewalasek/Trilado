import React from "react";
import styled from "styled-components";

const RecommendationsStyled = styled.div`
  width: 80vw;
  height: 80vh;
  position: absolute;
  left: 10vw;
  top: 10vh;
  background-color: white;
  z-index: 200;
`;

const Recommendations = () => {
  return <RecommendationsStyled>recommendations</RecommendationsStyled>;
};

export default Recommendations;
