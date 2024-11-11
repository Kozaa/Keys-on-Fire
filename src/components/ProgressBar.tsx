import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface ColoredBarProps {
  currentWord: number;
}

const ColoredBar = styled.div<ColoredBarProps>`
  position: absolute;
  background-color: red;
  width: ${({ currentWord }) => `${currentWord * 5}%`};
  height: 100%;
  transition: width 1s ease-in-out;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;

interface Props {
  currentWord: number;
  name: string;
}

const ProgressBar = ({ currentWord, name }: Props) => {
  return (
    <StyledWrapper>
      <ColoredBar currentWord={currentWord} />
      <StyledSpan>{name}</StyledSpan>
    </StyledWrapper>
  );
};

export default ProgressBar;
