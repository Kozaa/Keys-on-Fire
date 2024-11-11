import React from "react";
import styled from "styled-components";
import { numberOfWords } from "../utils/constatnts";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

interface ColoredBarProps {
  currentWord: number;
}

const ColoredBar = styled.div<ColoredBarProps>`
  position: absolute;
  background-color: ${({ theme, currentWord }) =>
    currentWord === numberOfWords ? theme.colors.red : theme.colors.secondary};
  width: ${({ currentWord }) => `${(currentWord / numberOfWords) * 100}%`};
  height: 100%;
  transition: width 1s ease-in-out;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;

const StyledSpanWPM = styled(StyledSpan)`
  top: 50%;
  left: unset;
  right: 16px;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 32px;
`;

interface Props {
  currentWord: number;
  name: string;
  wpm: number | null;
}

const ProgressBar = ({ currentWord, name, wpm }: Props) => {
  const isFinished = currentWord === numberOfWords;

  return (
    <StyledWrapper>
      <ColoredBar currentWord={currentWord} />
      <StyledSpan>{name}</StyledSpan>
      {wpm && isFinished && <StyledSpanWPM>{wpm} WPM</StyledSpanWPM>}
    </StyledWrapper>
  );
};

export default ProgressBar;
