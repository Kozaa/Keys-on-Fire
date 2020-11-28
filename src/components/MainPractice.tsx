import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import getData from "../utils/getData";
import TextDisplay from "./TextDisplay";
import { AppState } from "../redux/store";
import * as actions from "../redux/actionTypes";
import calculateWPM from "../utils/calculateWPM";
import ResultDisplay from "./ResultDisplay";
import EndpointButtonsDisplay from "./EndpointButtonsDisplay";

const StyledMainPractice = styled.main`
  width: 100%;
  height: 70vh;
`;

const MainPractice = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: AppState) => state.words);
  const currentWord = useSelector((state: AppState) => state.word);
  const currentLetter = useSelector((state: AppState) => state.letter);
  const timer = useSelector((state: AppState) => state.timer);
  const errorCount = useSelector(
    (state: AppState) => state.failedLetters.length
  );
  const endpoint = useSelector((state: AppState) => state.endpoint);

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
      getData(dispatch, endpoint);
      dispatch({ type: actions.RESET_WORD });
      dispatch({ type: actions.RESET_LETTER });
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
    getData(dispatch, endpoint);
    dispatch({
      type: actions.GAME_RESET,
    });
  }, [endpoint]);

  return (
    <StyledMainPractice>
      <TextDisplay handleInputChange={handleInputChange} />
      {calculateWPM(timer) ? (
        <ResultDisplay wpm={calculateWPM(timer)} errorCount={errorCount} />
      ) : null}
      <EndpointButtonsDisplay />
    </StyledMainPractice>
  );
};

export default MainPractice;
