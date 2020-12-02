import React from "react";
import styled from "styled-components";
import Button from "./Button";
import firestore from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { FirestoreDataType } from "../utils/constatnts";

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
  const raceData = useSelector((state: AppState) => state.raceData);
  const [games] = useCollectionData<FirestoreDataType>(firestore);
  const game = games?.find((game) => game.id === raceData.connectedGameID);

  const handleStartRace = () => {
    firestore.doc(raceData.connectedGameID).update({
      "settings.started": true,
    });
    console.log("start race");
  };

  return (
    <StyledWrapper>
      {/* <Button>Ready</Button> */}

      {host ? (
        !game?.settings.started ? (
          <Button handleClick={handleStartRace}>Start Race</Button>
        ) : (
          <span></span>
        )
      ) : (
        <span>Waiting for the host to start the race...</span>
      )}
    </StyledWrapper>
  );
};

export default RaceButtons;
