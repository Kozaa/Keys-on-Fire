import React, { useRef } from "react";
import styled from "styled-components";
import TextDisplay from "./TextDisplay";
import RaceButtons from "./RaceButtons";
import PlayerProgressDisplay from "./PlayerProgresDisplay";
import { FirestoreDataType } from "../utils/constatnts";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

const StyledWrapper = styled.main`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
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
  const gameID = useSelector(
    (state: AppState) => state.raceData.connectedGameID,
  );

  return (
    <StyledWrapper>
      <div>Game ID: {gameID}</div>

      <TextDisplay
        handleInputChange={handleInputChange}
        ref={inputRef}
        myRef={inputRef}
        games={games}
      >
        <RaceButtons host={host} myRef={inputRef} games={games} />
      </TextDisplay>

      <LowerWrapper>
        <PlayerProgressDisplay games={games} />
      </LowerWrapper>
    </StyledWrapper>
  );
};

export default RaceDisplay;
