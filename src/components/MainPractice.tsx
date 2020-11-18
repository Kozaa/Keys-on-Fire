import React from "react";
import styled from "styled-components";
import TextDisplay from "./TextDisplay";

const StyledMainPractice = styled.main`
  width: 100%;
  height: 70vh;

  background-color: red;
`;

const MainPractice = () => {
  return (
    <StyledMainPractice>
      <TextDisplay />
    </StyledMainPractice>
  );
};

export default MainPractice;
