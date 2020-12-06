import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import firestore from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { FirestoreDataType } from "../utils/constatnts";
import * as actions from "../redux/actionTypes";
import TimerDisplay from "./TimerDisplay";

const StyledWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledSpan = styled.span`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.grey};
`;

interface Props {
  host: boolean;
  myRef: React.RefObject<HTMLInputElement>;
  games: FirestoreDataType[];
}

const RaceButtons = ({ host, myRef, games }: Props) => {
  const raceData = useSelector((state: AppState) => state.raceData);
  const dispatch = useDispatch();
  const game = games?.find((game) => game.id === raceData.connectedGameID);

  const handleStartRace = () => {
    firestore.doc(raceData.connectedGameID).update({
      "settings.started": true,
    });
  };

  useEffect(() => {
    if (game?.settings.started && !raceData.started && !raceData.startedPrev) {
      myRef.current!.focus();

      setTimeout(() => {
        dispatch({ type: actions.RACE_DATA_STARTED });
      }, 5000);
    }
  }, [games, raceData]);

  return (
    <StyledWrapper>
      {console.log(
        "db: ",
        game?.settings.started,
        "started: ",
        raceData.started,
        "prev: ",
        raceData.startedPrev
      )}
      {host ? (
        !game?.settings.started ? (
          <Button handleClick={handleStartRace}>Start Race</Button>
        ) : !raceData.started ? (
          <TimerDisplay />
        ) : (
          <StyledSpan>GO!</StyledSpan>
        )
      ) : !game?.settings.started ? (
        <span>Waiting for the host to start the race...</span>
      ) : !raceData.started ? (
        <TimerDisplay />
      ) : (
        <StyledSpan>GO!</StyledSpan>
      )}
    </StyledWrapper>
  );
};

export default RaceButtons;
