import React from "react";
import styled from "styled-components";
import PlayerProgress from "./PlayerProgress";
import { FirestoreDataType } from "../utils/constatnts";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

const StyledWrapper = styled.div`
  width: 70%;
  height: 35vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.font.secondary};
`;

interface Props {
  games: FirestoreDataType[];
}

const PlayerProgressDisplay = ({ games }: Props) => {
  const gameID = useSelector(
    (state: AppState) => state.raceData.connectedGameID
  );

  const game = games?.find((game) => game.id === gameID);
  const playerKeys = game
    ? Object.keys(game!?.players).sort((a, b) => (a > b ? 1 : -1))
    : [];

  return (
    <StyledWrapper>
      <StyledDiv>
        <div style={{ width: "70%", textAlign: "left" }}>game ID: {gameID}</div>
        <div style={{ width: "20%" }}>speed</div>
        <div style={{ width: "10%" }}>errors</div>
      </StyledDiv>
      {game &&
        playerKeys.map((player, i) => (
          <PlayerProgress
            name={player}
            currentWord={game.players[player].currentWord}
            errors={game.players[player].errors}
            wpm={game.players[player].wpm}
            started={game.settings.started}
            key={i}
          />
        ))}
    </StyledWrapper>
  );
};

export default PlayerProgressDisplay;
