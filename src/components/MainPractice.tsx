import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import getData from "../utils/getData";
import TextDisplay from "./TextDisplay";
import { AppState } from "../redux/store";
import * as actions from "../redux/actionTypes";

const StyledMainPractice = styled.main`
  width: 100%;
  height: 70vh;
`;

const MainPractice = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: AppState) => state.words);
  const currentWord = useSelector((state: AppState) => state.word);
  const currentLetter = useSelector((state: AppState) => state.letter);

  const handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (e) => {
    const pressedKey = e.target.value.toLowerCase();
    console.log(pressedKey);

    if (currentLetter === 0 && pressedKey === " ") {
      e.target.value = "";
      return;
    }

    if (currentWord === 19 && currentLetter === words[currentWord].length - 1) {
      getData(dispatch);
      dispatch({ type: actions.GAME_RESET });

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
    getData(dispatch);
  }, []);

  return (
    <StyledMainPractice>
      <TextDisplay handleInputChange={handleInputChange} />
    </StyledMainPractice>
  );
};

export default MainPractice;
