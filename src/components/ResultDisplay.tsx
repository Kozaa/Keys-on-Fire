import React from "react";
import styled from "styled-components";
import { Theme } from "../theme";

const StyledResult = styled.div`
  height: 20vh;
  width: 100%;
  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledStat = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  wpm: string | null;
  errorCount: number;
}

const ResultDisplay = ({ wpm, errorCount }: Props) => (
  <StyledResult>
    <StyledStat>
      <span>Speed</span>
      <span style={{ fontSize: "32px", fontWeight: "bold" }}>{wpm} WPM</span>
    </StyledStat>

    <StyledStat>
      <span>Mistakes</span>
      <span
        style={{
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        {errorCount}
      </span>
    </StyledStat>
  </StyledResult>
);

export default ResultDisplay;
