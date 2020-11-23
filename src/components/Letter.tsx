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
  failedLetters: [number, number][];
}

const StyledLetter = styled.span<LetterProps>`
  position: relative;
  color: ${({
    theme,
    currentWord,
    currentLetter,
    wordIdx,
    letterIdx,
    failedLetters,
  }) => {
    let wordLetterIdx = [wordIdx, letterIdx];
    let isInFailedLetters = failedLetters.some((a) =>
      wordLetterIdx.every((v, i) => v === a[i])
    );

    if (
      (currentLetter > letterIdx || currentWord > wordIdx) &&
      isInFailedLetters
    ) {
      return theme.colors.red;
    } else if (currentWord > wordIdx) {
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
    left: 0;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.red};
    animation: ${({ currentLetter, currentWord, letterIdx, wordIdx }) =>
      currentWord === wordIdx && currentLetter === letterIdx
        ? css`.6s ${caretAnimation} infinite alternate`
        : "none"};
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
  const failedLetters = useSelector((state: AppState) => state.failedLetters);

  return (
    <StyledLetter
      currentWord={currentWord}
      currentLetter={currentLetter}
      letterIdx={letterIdx}
      wordIdx={wordIdx}
      failedLetters={failedLetters}
    >
      {letter}
    </StyledLetter>
  );
};
export default Letter;
