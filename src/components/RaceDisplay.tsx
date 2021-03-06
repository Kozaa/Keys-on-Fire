import React, { useRef } from "react";
import styled from "styled-components";
import TextDisplay from "./TextDisplay";
import RaceButtons from "./RaceButtons";
import PlayerProgressDisplay from "./PlayerProgresDisplay";
import { FirestoreDataType } from "../utils/constatnts";

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
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  games: FirestoreDataType[];
}

const RaceDisplay = ({ host, handleInputChange, games }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledWrapper>
      <TextDisplay
        handleInputChange={handleInputChange}
        ref={inputRef}
        myRef={inputRef}
        games={games}
      />
      <LowerWrapper>
        <PlayerProgressDisplay games={games} />
        <RaceButtons host={host} myRef={inputRef} games={games} />
      </LowerWrapper>
    </StyledWrapper>
  );
};

export default RaceDisplay;
