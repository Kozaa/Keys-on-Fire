import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Reroll from "../assets/Reroll";
import Text from "./Text";
import getData from "../utils/getData";
import * as actions from "../redux/actionTypes";
import { AppState } from "../redux/store";
import { RaceStateEnum } from "../redux/reducers/raceStateReducer";

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
}

const TextDisplay = ({ handleInputChange }: Props) => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const endpoint = useSelector((state: AppState) => state.endpoint);
  const raceState = useSelector((state: AppState) => state.raceState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReroll = () => {
    getData(dispatch, endpoint);
    dispatch({ type: actions.GAME_RESET });
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <StyledWrapper>
      <Text />
      <StyledLabel htmlFor="input" isFocused={isFocused}>
        Click to focus
      </StyledLabel>
      <StyledInput
        ref={inputRef}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        id="input"
        type="text"
        onChange={handleInputChange}
      />
      {raceState === RaceStateEnum.JOINED ? null : (
        <Reroll handleClick={handleReroll} />
      )}
    </StyledWrapper>
  );
};

export default TextDisplay;
