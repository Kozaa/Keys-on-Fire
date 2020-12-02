import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/store";
import { RaceStateEnum } from "../redux/reducers/raceStateReducer";
import * as actions from "../redux/actionTypes";
import RaceChoose from "./RaceChoose";
import RaceDisplay from "./RaceDisplay";
import firestore from "../firebase";
import calculateWPM from "../utils/calculateWPM";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FirestoreDataType, numberOfWords } from "../utils/constatnts";

const StyledMainRace = styled.main`
  width: 100%;
  height: 70vh;
`;

const MainRace: React.FC = () => {
  const {
    raceState,
    letter: currentLetter,
    word: currentWord,
    words,
    raceData,
    failedLetters,
    timer,
  } = useSelector((state: AppState) => state);
  const [games] = useCollectionData<FirestoreDataType>(firestore);
  const game = games?.find((game) => game.id === raceData.connectedGameID);
  const dispatch = useDispatch();

  const handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (e) => {
    const pressedKey = e.target.value.toLowerCase();

    if (currentWord >= numberOfWords) {
      return;
    }

    if (currentWord === 0 && currentLetter === 0) {
      console.log("reset");
      dispatch({ type: actions.RESET_FAILED_LETTERS });
      dispatch({
        type: actions.TIMER_RESET,
        payload: { now: new Date().getTime() },
      });
      console.log("start");
      dispatch({
        type: actions.TIMER_START,
        payload: { now: new Date().getTime() },
      });
    }

    if (currentLetter === 0 && pressedKey === " ") {
      e.target.value = "";
      return;
    }

    if (
      pressedKey === words[currentWord][currentLetter] &&
      currentWord === words.length - 1 &&
      currentLetter === words[currentWord].length - 1
    ) {
      dispatch({ type: actions.NEXT_WORD });
      dispatch({ type: actions.NEXT_LETTER });
      console.log("stop");
      dispatch({
        type: actions.TIMER_STOP,
        payload: { now: new Date().getTime() },
      });

      e.target.value = "";
      return;
    }

    if (pressedKey === words[currentWord][currentLetter]) {
      if (currentLetter === words[currentWord].length - 1) {
        dispatch({ type: actions.NEXT_WORD });
      } else {
        dispatch({ type: actions.NEXT_LETTER });
      }
    } else {
      dispatch({
        type: actions.ADD_FAILED_LETTER,
        payload: { letter: [currentWord, currentLetter] },
      });
    }
    e.target.value = "";
  };

  useEffect(() => {
    if (raceData.connectedGameID) {
      firestore.doc(raceData.connectedGameID).update({
        [`players.${raceData.name}.wpm`]: calculateWPM(timer),
        [`players.${raceData.name}.currentWord`]: currentWord,
        [`players.${raceData.name}.errors`]: failedLetters.length,
      });
      console.log("send update");
    }
  }, [timer, currentWord]);

  // useEffect(() => {  << update text on host change attempt
  //   if (game?.settings.text && raceData.connectedGameID) {
  //     firestore.doc(raceData.connectedGameID).update({
  //       [`players.${raceData.name}.wpm`]: 0,
  //       [`players.${raceData.name}.currentWord`]: 0,
  //       [`players.${raceData.name}.errors`]: 0,
  //     });
  //     dispatch({
  //       type: actions.SET_WORD_SET,
  //       payload: {
  //         words: game?.settings.text,
  //       },
  //     });
  //     console.log("send text pudate");
  //   }
  // }, [game?.settings.text]); <-- runs after every update not olny text

  const renderSwitch = () => {
    switch (raceState) {
      case RaceStateEnum.CHOOSING:
        return <RaceChoose />;
      case RaceStateEnum.HOST:
        return (
          <RaceDisplay
            host={true}
            handleInputChange={handleInputChange}
            started={game!?.settings.started}
          />
        );
      case RaceStateEnum.JOINED:
        return (
          <RaceDisplay
            host={false}
            handleInputChange={handleInputChange}
            started={game!?.settings.started}
          />
        );
    }
  };

  return <StyledMainRace>{renderSwitch()}</StyledMainRace>;
};

export default MainRace;
