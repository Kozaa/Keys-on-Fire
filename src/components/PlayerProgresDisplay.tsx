import React from "react";
import styled from "styled-components";
import PlayerProgress from "./PlayerProgress";
import firestore from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
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

const PlayerProgressDisplay = () => {
  const gameID = useSelector(
    (state: AppState) => state.raceData.connectedGameID
  );
  const [games] = useCollectionData<FirestoreDataType>(firestore);
  const game = games?.find((game) => game.id === gameID);

  return (
    <StyledWrapper>
      <StyledDiv>
        <div style={{ width: "70%", textAlign: "left" }}>gameID: XD24D</div>
        <div style={{ width: "20%" }}>speed</div>
        <div style={{ width: "10%" }}>errors</div>
      </StyledDiv>
      {game &&
        game.players.map((player, i) => <PlayerProgress {...player} key={i} />)}
    </StyledWrapper>
  );
};

export default PlayerProgressDisplay;
