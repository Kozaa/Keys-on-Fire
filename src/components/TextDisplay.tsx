import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Reroll from "../assets/Reroll";
import Text from "./Text";
import getData from "../utils/getData";
import * as actions from "../redux/actionTypes";

const StyledWrapper = styled.div`
  max-height: 40%;
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  line-height: 1.3em;
  background-color: ${({ theme }) => theme.colors.secondaryDark};

  :after {
    content: "press to focus";
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.red};
    transition: transform 1s ease-in-out;
  }

  :focus,
  :active {
    outline: none;

    :after {
      transform: translateY(-100%);
    }
  }
`;

interface Props {
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

const TextDisplay = ({ handleKeyDown }: Props) => {
  const dispatch = useDispatch();

  const handleReroll = () => {
    getData(dispatch);
    dispatch({ type: actions.GAME_RESET });
  };

  return (
    <StyledWrapper onKeyDown={handleKeyDown} tabIndex={1}>
      <Text />
      <Reroll handleClick={handleReroll} />
    </StyledWrapper>
  );
};

export default TextDisplay;
