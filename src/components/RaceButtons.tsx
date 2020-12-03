import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import firestore from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
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
  const [showTimer, setShowTimer] = useState(true);
  const raceData = useSelector((state: AppState) => state.raceData);
  const dispatch = useDispatch();
  const game = games?.find((game) => game.id === raceData.connectedGameID);

  const handleStartRace = () => {
    firestore.doc(raceData.connectedGameID).update({
      "settings.started": true,
    });

    // setTimeout(() => {
    //   setShowTimer(false);
    //   dispatch({ type: actions.RACE_DATA_STARTED });
    // }, 5000);

    myRef.current!.focus();

    console.log("start race");
  };

  if (game?.settings.started && !raceData.started) {
    setTimeout(() => {
      setShowTimer(false);
      dispatch({ type: actions.RACE_DATA_STARTED });
    }, 5000);
  }

  return (
    <StyledWrapper>
      {/* <Button>Ready</Button> */}

      {host ? (
        !game?.settings.started ? (
          <Button handleClick={handleStartRace}>Start Race</Button>
        ) : showTimer ? (
          <TimerDisplay />
        ) : (
          <StyledSpan>GO!</StyledSpan>
        )
      ) : !game?.settings.started ? (
        <span>Waiting for the host to start the race...</span>
      ) : showTimer ? (
        <TimerDisplay />
      ) : (
        <StyledSpan>GO!</StyledSpan>
      )}
    </StyledWrapper>
  );
};

export default RaceButtons;
