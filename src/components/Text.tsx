import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import Word from "./Word";
import { useDispatch, useSelector } from "react-redux";
import { GO_FORWARDS } from "../redux/actionTypes";

const StyledWrapper = styled.div`
  width: 60%;
  position: relative;
`;

const Text = () => {
  const currentLetter = useSelector((state: any) => state.letter);
  const words = useSelector((state: any) => state.words);
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      {words && words.map((word, i) => <span key={i}>{word} </span>)}
      <div>current letter: {currentLetter}</div>
      <button onClick={() => dispatch({ type: GO_FORWARDS })}>add</button>
    </StyledWrapper>
  );
};

export default Text;
