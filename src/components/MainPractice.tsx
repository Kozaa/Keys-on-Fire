import React, { useEffect, useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    words,
    word: currentWord,
    letter: currentLetter,
    timer,
    failedLetters,
    endpoint,
  } = useSelector((state: AppState) => state);

  const handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (e) => {
    const pressedKey = e.target.value.toLowerCase();

    if (currentWord === 0 && currentLetter === 0) {
      dispatch({ type: actions.RESET_FAILED_LETTERS });
      dispatch({
        type: actions.TIMER_RESET,
        payload: { now: new Date().getTime() },
      });

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
      <TextDisplay
        handleInputChange={handleInputChange}
        ref={inputRef}
        myRef={inputRef}
      />
      {calculateWPM(timer) ? (
        <ResultDisplay
          wpm={calculateWPM(timer)}
          errorCount={failedLetters.length}
        />
      ) : null}
      <EndpointButtonsDisplay myRef={inputRef} />
    </StyledMainPractice>
  );
};

export default MainPractice;
