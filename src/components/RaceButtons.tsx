import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const RaceButtons = () => {
  return (
    <StyledWrapper>
      <Button>Ready</Button>
      <Button>Start Race</Button>
    </StyledWrapper>
  );
};

export default RaceButtons;
