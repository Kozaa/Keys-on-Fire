import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import getData from "../utils/getData";
import TextDisplay from "./TextDisplay";

const StyledMainPractice = styled.main`
  width: 100%;
  height: 70vh;

  background-color: red;
`;

const MainPractice = () => {
  const dispatch = useDispatch();

  useEffect(() => getData(dispatch), []);

  return (
    <StyledMainPractice>
      <TextDisplay />
    </StyledMainPractice>
  );
};

export default MainPractice;
