import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
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
  endpoint: string;
  handleClick: (endpoint: string) => void | (() => void);
}

const EndpointButton = ({ handleClick, endpoint }: Props) => {
  const currentEndpoint = useSelector((state: AppState) => state.endpoint);

  return (
    <StyledButton
      onClick={() => handleClick(endpoint)}
      currentEndpoint={currentEndpoint}
      currentButton={endpoint}
    >
      {endpoint}
    </StyledButton>
  );
};

export default EndpointButton;
