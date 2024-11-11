import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actionTypes";
import styled from "styled-components";
import Button from "./Button";
import createGameInstance from "../utils/createGameInstance";
import { FirestoreDataType } from "../utils/constatnts";
import useWindowSize from "../utils/useWindowSize";
import firestore from "../firebase";
import { AppState } from "../redux/store";

const StyledWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const StyleActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  text-align: center;
`;

const StyledLabel = styled.span`
  font-size: 24px;
`;

interface Props {
  games: FirestoreDataType[];
}

const RaceChoose = ({ games }: Props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [gameIDInput, setGameIDInput] = useState("");
  const dispatch = useDispatch();
  const words = useSelector((state: AppState) => state.words);
  const [windowWidth] = useWindowSize();

  let inlineButton1Style =
    windowWidth > 768 ? { gridRow: "5/6", gridColumn: "1/2" } : {};
  let inlineButton2Style =
    windowWidth > 768 ? { gridRow: "5/6", gridColumn: "2/3" } : {};

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setUsernameInput(e.target.value);
    } else alert("Username cannot be longer than 10 charackters.");
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
      const gamesIDs = games?.map((game) => game.id);

      if (gamesIDs?.includes(gameIDInput)) {
        const game = games?.find((game) => game.id === gameIDInput);

        const numOfPlayers = Object.keys(game!?.players).length;

        if (!game?.settings.started && numOfPlayers < 4) {
          firestore.doc(gameIDInput).update({
            players: {
              ...game!.players,
              [usernameInput]: {
                currentWord: 0,
                errors: 0,
                wpm: 0,
              },
            },
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

          dispatch({ type: actions.RACE_DATA_STARTED_RESET });

          dispatch({ type: actions.RACE_STATE_JOINED });
        } else alert("Lobby is full or race already begun");
      } else alert("Could not find gameID");
    } else alert("Invalid username or gameID");
  };

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <StyledLabel>Username</StyledLabel>
        <StyledInput
          type="text"
          placeholder="1-10 characters"
          onChange={handleUsernameChange}
          value={usernameInput}
        />
      </StyledInputWrapper>

      <StyleActionWrapper>
        <StyledInputWrapper>
          <StyledLabel>
            Host a new lobby and invite your friends for a race.
          </StyledLabel>
          <Button style={inlineButton2Style} handleClick={handleHostNewGame}>
            Host new game
          </Button>
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel>Join already existing lobby using game ID.</StyledLabel>
          <div style={{ display: "flex" }}>
            <StyledInput
              style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
              type="text"
              placeholder="ex. H3GA1"
              onChange={handleGameIDChange}
              value={gameIDInput}
            />
            <Button
              style={{
                height: "50px",
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                ...inlineButton1Style,
              }}
              handleClick={handleJoinGame}
            >
              Join
            </Button>
          </div>
        </StyledInputWrapper>
      </StyleActionWrapper>
    </StyledWrapper>
  );
};

export default RaceChoose;
