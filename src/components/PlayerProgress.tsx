import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledWrapper = styled.div`
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
}

const PlayerProgress = ({ name, currentWord, wpm, errors }: Props) => {
  return (
    <StyledWrapper>
      <ProgressBar name={name} currentWord={currentWord} />
      <div style={{ width: "20%" }}>{wpm} WPM</div>
      <div style={{ width: "10%" }}>{errors}</div>
    </StyledWrapper>
  );
};

export default PlayerProgress;
