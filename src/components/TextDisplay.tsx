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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-width: 100%;
`;

const StyledTextWrapper = styled.div`
  padding: 20px 0;
  min-height: 20%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  line-height: 1.3em;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 36px;
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

  font-size: 1.2em;

  color: ${({ theme }) => theme.colors.red};
  background-color: rgba(0, 0, 0, 0.2);

  opacity: ${({ isFocused }) => (isFocused ? 0 : 1)};
  filter: none;

  transition: opacity 0.3s ease-in-out;
`;

interface Props {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  myRef?: React.RefObject<HTMLInputElement>;
  games?: FirestoreDataType[];
  children?: React.ReactNode;
}

const TextDisplay = React.forwardRef<HTMLInputElement, Props>(
  ({ handleInputChange, myRef, games, children }, ref) => {
    const dispatch = useDispatch();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { endpoint, raceData, raceState } = useSelector(
      (state: AppState) => state,
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
        <StyledTextWrapper>
          <Text isFocused={isFocused} />
          <StyledLabel htmlFor="input" isFocused={isFocused}>
            <span>click to focus</span>
          </StyledLabel>
          <StyledInput
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            id="input"
            type="text"
            onChange={handleInputChange}
          />
        </StyledTextWrapper>

        <StyledButtonsWrapper>
          {children}

          {raceState === RaceStateEnum.JOINED ? null : (
            <Reroll
              handleClick={
                raceState === RaceStateEnum.CHOOSING
                  ? handlePracticeReroll
                  : handleRaceReroll
              }
            />
          )}
        </StyledButtonsWrapper>
      </StyledWrapper>
    );
  },
);

export default TextDisplay;
