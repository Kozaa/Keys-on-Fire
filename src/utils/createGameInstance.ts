import getRandomGameID from "./getRandomGameID";
import * as actions from "../redux/actionTypes";
import firestore from "../firebase";
import { Dispatch } from "redux";

const createGameInstance = (
  dispatch: Dispatch,
  username: string,
  words: string[] | string
): void => {
  const gameID = getRandomGameID();

  dispatch({
    type: actions.RACE_DATA_UPDATE,
    payload: {
      name: username,
      gameID: gameID,
    },
  });

  firestore.doc(gameID).set({
    id: gameID,
    settings: {
      text: words,
      started: false,
    },
    players: {
      [username]: {
        currentWord: 0,
        errors: 0,
        wpm: 0,
      },
    },
  });
};

export default createGameInstance;
