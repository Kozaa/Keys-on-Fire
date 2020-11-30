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

interface Props {
  host: boolean;
}

const RaceButtons = ({ host }: Props) => {
  return (
    <StyledWrapper>
      <Button>Ready</Button>
      {host ? <Button>Start Race</Button> : null}
    </StyledWrapper>
  );
};

export default RaceButtons;
