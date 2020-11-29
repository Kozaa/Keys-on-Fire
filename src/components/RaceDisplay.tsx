import React from "react";
import styled from "styled-components";
import TextDisplay from "./TextDisplay";
import RaceButtons from "./RaceButtons";
import PlayerProgressDisplay from "./PlayerProgresDisplay";

const StyledWrapper = styled.main`
  width: 100%;
  height: 70vh;
`;

const LowerWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  host: boolean;
}

const RaceDisplay = ({ host }: Props) => {
  return (
    <StyledWrapper>
      <TextDisplay handleInputChange={() => console.log("hey")} />
      <LowerWrapper>
        <PlayerProgressDisplay />
        <RaceButtons />
      </LowerWrapper>
    </StyledWrapper>
  );
};

export default RaceDisplay;
