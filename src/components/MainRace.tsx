import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/store";
import { RaceStateEnum } from "../redux/reducers/raceStateReducer";
import * as actions from "../redux/actionTypes";
import RaceChoose from "./RaceChoose";
import RaceDisplay from "./RaceDisplay";

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
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (e) => {
    const pressedKey = e.target.value.toLowerCase();

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
      dispatch({ type: actions.RESET_WORD });
      dispatch({ type: actions.RESET_LETTER });
      console.log("stop");
      dispatch({
        type: actions.TIMER_STOP,
        payload: { now: new Date().getTime() },
      });
      // send currentword, wpm, errors to server

      e.target.value = "";
      return;
    }

    if (pressedKey === words[currentWord][currentLetter]) {
      if (currentLetter === words[currentWord].length - 1) {
        dispatch({ type: actions.NEXT_WORD });
        // send currentword, wpm, errors to server
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

  const renderSwitch = () => {
    switch (raceState) {
      case RaceStateEnum.CHOOSING:
        return <RaceChoose />;
      case RaceStateEnum.HOST:
        return (
          <RaceDisplay host={true} handleInputChange={handleInputChange} />
        );
      case RaceStateEnum.JOINED:
        return (
          <RaceDisplay host={false} handleInputChange={handleInputChange} />
        );
    }
  };

  return <StyledMainRace>{renderSwitch()}</StyledMainRace>;
};

export default MainRace;
