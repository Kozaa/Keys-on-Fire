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
  started: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RaceDisplay = ({ host, handleInputChange, started }: Props) => {
  return (
    <StyledWrapper>
      <TextDisplay handleInputChange={handleInputChange} started={started} />
      <LowerWrapper>
        <PlayerProgressDisplay />
        <RaceButtons host={host} />
      </LowerWrapper>
    </StyledWrapper>
  );
};

export default RaceDisplay;
