import React from "react";
import styled from "styled-components";
import Letter from "./Letter";

const StyledWord = styled.span`
  white-space: nowrap;
`;

interface Props {
  word: string;
  current: number;
}

const Word = ({ word, current }: Props) => {
  const letters = word.split("");

  return (
    <StyledWord>
      {letters.map((letter, i) => (
        <Letter character={letter} key={i} i={i} current={current} />
      ))}
    </StyledWord>
  );
};

export default Word;
