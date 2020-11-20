import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { caretAnimation } from "../animations/caretAnimation";
import { AppState } from "../redux/store";

interface LetterProps {
  currentWord: number;
  currentLetter: number;
  wordIdx: number;
  letterIdx: number;
}

// const StyledLetter = styled.span<LetterProps>`
// css`.6s ${caretAnimation} infinite alternate`

const StyledLetter = styled.span<LetterProps>`
  position: relative;
  color: ${({ theme, currentWord, currentLetter, wordIdx, letterIdx }) => {
    if (currentWord > wordIdx) {
      return theme.colors.grey;
    } else if (currentWord === wordIdx && currentLetter > letterIdx) {
      return theme.colors.grey;
    } else return "white";
  }};

  :after {
    content: "";
    width: 2px;
    height: 1em;
    position: absolute;
    right: 0;
    opacity: 0;
  }
`;

interface Props {
  letter: string;
  letterIdx: number;
  wordIdx: number;
}

const Letter = ({ letter, letterIdx, wordIdx }: Props) => {
  const currentLetter = useSelector((state: AppState) => state.letter);
  const currentWord = useSelector((state: AppState) => state.word);

  return (
    <StyledLetter
      currentWord={currentWord}
      currentLetter={currentLetter}
      letterIdx={letterIdx}
      wordIdx={wordIdx}
    >
      {letter}
    </StyledLetter>
  );
};
export default Letter;
