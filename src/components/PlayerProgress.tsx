import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledWrapper = styled.div`
    max-width: 1000px;
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;



interface Props {
  name: string;
  currentWord: number;
  wpm: number;
  errors: number;
  started: boolean;
}

const PlayerProgress = ({ name, currentWord, wpm, errors, started }: Props) => {
  return (
    <StyledWrapper>
      <ProgressBar name={name} currentWord={currentWord} wpm={started && wpm ? wpm : null} />
    </StyledWrapper>
  );
};

export default PlayerProgress;
