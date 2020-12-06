import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Reroll from "../assets/Reroll";
import Text from "./Text";
import getData from "../utils/getData";
import * as actions from "../redux/actionTypes";
import { AppState } from "../redux/store";
import { RaceStateEnum } from "../redux/reducers/raceStateReducer";
import firestore from "../firebase";
import { FirestoreDataType } from "../utils/constatnts";

const StyledWrapper = styled.div`
  padding: 20px 0;
  min-height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  line-height: 1.3em;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
`;

const StyledInput = styled.input`
  width: 0;
  height: 0;
  position: fixed;
  top: -100%;
`;

type LabelProps = {
  isFocused: boolean;
};

const StyledLabel = styled.label<LabelProps>`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 2em;

  color: ${({ theme }) => theme.colors.red};
  background-color: rgba(0, 0, 0, 0.8);

  opacity: ${({ isFocused }) => (isFocused ? 0 : 1)};

  transition: opacity 0.3s ease-in-out;
`;

interface Props {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  myRef?: React.RefObject<HTMLInputElement>;
  games?: FirestoreDataType[];
}

const TextDisplay = React.forwardRef<HTMLInputElement, Props>(
  ({ handleInputChange, myRef, games }, ref) => {
    const dispatch = useDispatch();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { endpoint, raceData, raceState } = useSelector(
      (state: AppState) => state
    );
    const game = games?.find((game) => game.id === raceData.connectedGameID);

    const handlePracticeReroll = () => {
      getData(dispatch, endpoint);
      dispatch({ type: actions.GAME_RESET });
      if (myRef) {
        myRef.current?.focus();
      }

      setIsFocused(true);
    };

    const handleRaceReroll = () => {
      if (game?.settings.started === raceData.started) {
        console.log("reroll");
        getData(dispatch, endpoint).then((words) => {
          firestore.doc(raceData.connectedGameID).update({
            "settings.text": words,
          });
        });

        if (myRef) {
          myRef.current?.focus();
        }

        setIsFocused(true);
      } else return;
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    return (
      <StyledWrapper>
        <Text />
        <StyledLabel htmlFor="input" isFocused={isFocused}>
          <span>Click to focus</span>
        </StyledLabel>
        <StyledInput
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id="input"
          type="text"
          onChange={handleInputChange}
        />
        {raceState === RaceStateEnum.JOINED ? null : (
          <Reroll
            handleClick={
              raceState === RaceStateEnum.CHOOSING
                ? handlePracticeReroll
                : handleRaceReroll
            }
          />
        )}
      </StyledWrapper>
    );
  }
);

export default TextDisplay;
