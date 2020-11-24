import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import * as actions from "../redux/actionTypes";
import { AppState } from "../redux/store";

interface ButtonProps {
  currentEndpoint: string;
  currentButton: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: 90%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  padding: 25px 10px;
  border: ${({ theme, currentEndpoint, currentButton }) =>
    currentEndpoint === currentButton
      ? css`2px solid ${theme.colors.red}`
      : "none"};
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  children: string;
}

const EndpointButton = ({ children }: Props) => {
  const dispatch = useDispatch();
  const currentEndpoint = useSelector((state: AppState) => state.endpoint);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({
      type: actions.SET_ENDPOINT,
      payload: {
        endpoint: children,
      },
    });
  };

  return (
    <StyledButton
      onClick={handleClick}
      currentEndpoint={currentEndpoint}
      currentButton={children}
    >
      {children}
    </StyledButton>
  );
};

export default EndpointButton;
