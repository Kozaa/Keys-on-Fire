import React from "react";
import styled from "styled-components";
import PlayerProgress from "./PlayerProgress";
import { FirestoreDataType } from "../utils/constatnts";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
`;

interface Props {
  games: FirestoreDataType[];
}

const PlayerProgressDisplay = ({ games }: Props) => {
  const gameID = useSelector(
    (state: AppState) => state.raceData.connectedGameID,
  );

  const game = games?.find((game) => game.id === gameID);
  const playerKeys = game
    ? Object.keys(game!?.players).sort((a, b) => (a > b ? 1 : -1))
    : [];

  return (
    <StyledWrapper>
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
