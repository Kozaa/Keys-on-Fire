import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Reroll from "../assets/Reroll";
import Text from "./Text";
import getData from "../utils/getData";
import * as actions from "../redux/actionTypes";
import { AppState } from "../redux/store";
import { RaceStateEnum } from "../redux/reducers/raceStateReducer";
import firestore from "../firebase";

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
}

const TextDisplay = React.forwardRef<HTMLInputElement, Props>(
  ({ handleInputChange, myRef }, ref) => {
    const dispatch = useDispatch();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { endpoint, raceData, raceState } = useSelector(
      (state: AppState) => state
    );

    const handlePracticeReroll = () => {
      getData(dispatch, endpoint);
      dispatch({ type: actions.GAME_RESET });
      if (myRef) {
        myRef.current?.focus();
      }

      setIsFocused(true);
    };

    const handleRaceReroll = () => {
      console.log("reroll");
      getData(dispatch, endpoint).then((words) => {
        firestore.doc(raceData.connectedGameID).update({
          "settings.text": words,
        });
      });
      //dispatch({ type: actions.GAME_RESET });

      if (myRef) {
        myRef.current?.focus();
      }

      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    // useEffect(() => {
    //   if (raceData.started) {
    //     setIsFocused(true);
    //     inputRef.current!.focus();
    //   }
    //   console.log("i run");
    // }, [DBstarted]);

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
