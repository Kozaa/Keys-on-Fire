import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  font-size: 24px;
  position: relative;

  :hover {
    cursor: pointer;
    :after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

interface Props {
  children: string;
  handleClick: (...args: any[]) => void;
}

const ActionText = ({ children, handleClick }: Props) => {
  return <StyledText onClick={handleClick}>{children}</StyledText>;
};

export default ActionText;
