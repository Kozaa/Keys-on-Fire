import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import Word from "./Word";
import { useSelector, useDispatch } from "react-redux";
import { NEXT_LETTER, NEXT_WORD } from "../redux/actionTypes";
import { AppState } from "../redux/store";

const StyledWrapper = styled.div`
  width: 60%;
  position: relative;
  text-align: justify;
`;

const Text = () => {
  const currentLetter = useSelector((state: AppState) => state.letter);
  const words = useSelector((state: AppState) => state.words);

  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      {words &&
        words.map((word, i) => <Word word={word} wordIdx={i} key={i} />)}
      <div>current letter: {currentLetter}</div>
      <button onClick={() => dispatch({ type: NEXT_LETTER })}>add</button>
      <button onClick={() => dispatch({ type: NEXT_WORD })}>add</button>
    </StyledWrapper>
  );
};

export default Text;
