import React from "react";
import styled from "styled-components";
import { Theme } from "../theme";

const StyledResult = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

interface Props {
  wpm: string | null;
  errorCount: number;
}

const ResultDisplay: React.FC<Props> = ({ wpm, errorCount }) => (
  <StyledResult>
    <div>
      <span>Speed: </span>
      <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>{wpm} WPM</span>
    </div>
    <div>
      <span>Errors: </span>
      <span
        style={{
          color: Theme.colors.red,
          marginLeft: "10px",
          fontSize: "1.2em",
        }}
      >
        {errorCount}
      </span>
    </div>
  </StyledResult>
);

export default ResultDisplay;
