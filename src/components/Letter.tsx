import React from "react";
import styled, { css } from "styled-components";
import { caretAnimation } from "../animations/caretAnimation";

interface LetterProps {
  current: number;
  i: number;
}

const StyledLetter = styled.span<LetterProps>`
  position: relative;
  color: ${({ current, i, theme }) =>
    current > i - 1 ? theme.colors.grey : "white"};

  :after {
    content: "";
    width: 2px;
    height: 1em;
    position: absolute;
    right: 0;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.red};
    animation: ${({ current, i }) =>
      current === i ? css`.6s ${caretAnimation} infinite alternate` : "none"};
  }
`;

interface Props {
  character: string;
  current: number;
  i: number;
}

const Letter = ({ character, current, i }: Props) => (
  <StyledLetter current={current} i={i}>
    {character}
  </StyledLetter>
);

export default Letter;
