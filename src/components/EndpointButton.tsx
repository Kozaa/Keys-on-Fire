import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppState } from "../redux/store";

interface ButtonProps {
  selected: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.background};
  border-radius: 8px;
  padding: 8px 16px;
  outline: none;
  font-size: 24px;
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
  const selected = currentEndpoint === endpoint;
  return (
    <StyledButton onClick={() => handleClick(endpoint)} selected={selected}>
      {endpoint}
    </StyledButton>
  );
};

export default EndpointButton;
