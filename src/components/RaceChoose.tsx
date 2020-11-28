import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  margin-top: 10px;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.2em 1.4em 1.2em 1.4em 100px;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2em 1.4em 1.2em 1.4em 1fr 2fr;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  grid-column: 1/3;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
`;

const StyledInput2 = styled(StyledInput)`
  grid-column: 1/2;
  grid-row: 4/5;
`;

const StyledSpan = styled.span`
  grid-column: 1/3;

  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
`;

const inlineButton1Style =
  window.innerWidth > 768 ? { gridRow: "5/6", gridColumn: "1/2" } : {};
const inlineButton2Style =
  window.innerWidth > 768 ? { gridRow: "5/6", gridColumn: "2/3" } : {};

const RaceChoose = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [gameIDInput, setGameIDInput] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
  };

  const handleGameIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameIDInput(e.target.value);
  };

  return (
    <StyledWrapper>
      <StyledSpan>username</StyledSpan>
      <StyledInput
        type="text"
        placeholder="1-10 characters"
        onChange={handleGameIDChange}
        value={gameIDInput}
      />
      <span>gameID</span>
      <StyledInput2
        type="text"
        placeholder="ex. H3GA1"
        onChange={handleUsernameChange}
        value={usernameInput}
      />
      <Button style={inlineButton1Style}>join game</Button>
      <Button style={inlineButton2Style}>host new game</Button>
    </StyledWrapper>
  );
};

export default RaceChoose;
