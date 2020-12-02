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

const Errors = styled.div`
  width: 10%;
  color: ${({ theme }) => theme.colors.red};
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
      <ProgressBar name={name} currentWord={currentWord} />
      <div style={{ width: "20%" }}>
        {started ? (wpm ? wpm + " WPM" : "typing...") : "-"}
      </div>
      <Errors>{errors}</Errors>
    </StyledWrapper>
  );
};

export default PlayerProgress;
