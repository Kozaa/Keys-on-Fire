import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actionTypes";
import styled from "styled-components";
import Button from "./Button";
import { dummyData } from "../utils/constatnts";
import createGameInstance from "../utils/createGameInstance";
import firestore from "../firebase";
import { AppState } from "../redux/store";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FirestoreDataType } from "../utils/constatnts";
import PlayerProgress from "./PlayerProgress";

const StyledWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  margin-top: 10px;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.2em 1.4em 1.2em 1.4em 100px;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2em 1.4em 1.2em 1.4em 1fr 2fr;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  grid-column: 1/3;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
`;

const StyledInput2 = styled(StyledInput)`
  grid-column: 1/2;
  grid-row: 4/5;
`;

const StyledSpan = styled.span`
  grid-column: 1/3;

  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
`;

const inlineButton1Style =
  window.innerWidth > 768 ? { gridRow: "5/6", gridColumn: "1/2" } : {};
const inlineButton2Style =
  window.innerWidth > 768 ? { gridRow: "5/6", gridColumn: "2/3" } : {};

const RaceChoose = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [gameIDInput, setGameIDInput] = useState("");
  const dispatch = useDispatch();
  const words = useSelector((state: AppState) => state.words);
  const [games] = useCollectionData<FirestoreDataType>(firestore);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
  };

  const handleGameIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameIDInput(e.target.value.toUpperCase());
  };

  const handleHostNewGame = () => {
    if (usernameInput) {
      createGameInstance(dispatch, usernameInput, words);
      dispatch({ type: actions.RACE_STATE_HOST });
    } else alert("Username is required to host a game.");
  };

  const handleJoinGame = () => {
    if (usernameInput && gameIDInput) {
      //check if game id exzist
      //send name to database

      const gamesIDs = games?.map((game) => game.id);

      if (gamesIDs?.includes(gameIDInput)) {
        const game = games?.find((game) => game.id === gameIDInput);

        if (!game?.settings.started && game!.players.length < 4) {
          firestore.doc(gameIDInput).update({
            players: [
              ...game!.players,
              {
                name: usernameInput,
                currentWord: 0,
                errors: 0,
                wpm: 0,
              },
            ],
          });

          dispatch({
            type: actions.SET_WORD_SET,
            payload: { words: game?.settings.text },
          });

          dispatch({
            type: actions.RACE_DATA_UPDATE,
            payload: {
              name: usernameInput,
              gameID: gameIDInput,
            },
          });

          dispatch({ type: actions.RACE_STATE_JOINED });
        } else alert("Sorry, game already in progress");
      } else alert("Couldnt find that gameID");
    } else alert("Invalid username or gameID");
  };

  return (
    <StyledWrapper>
      <StyledSpan>username</StyledSpan>
      <StyledInput
        type="text"
        placeholder="1-10 characters"
        onChange={handleUsernameChange}
        value={usernameInput}
      />
      <span>gameID</span>
      <StyledInput2
        type="text"
        placeholder="ex. H3GA1"
        onChange={handleGameIDChange}
        value={gameIDInput}
      />
      <Button style={inlineButton1Style} handleClick={handleJoinGame}>
        join game
      </Button>
      <Button style={inlineButton2Style} handleClick={handleHostNewGame}>
        host new game
      </Button>
    </StyledWrapper>
  );
};

export default RaceChoose;
