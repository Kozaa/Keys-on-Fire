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

const PlayerProgress = () => {
  return (
    <StyledWrapper>
      <ProgressBar />
      <div style={{ width: "20%" }}>42.32 WPM</div>
      <div style={{ width: "10%" }}>8</div>
    </StyledWrapper>
  );
};

export default PlayerProgress;
