import React from "react";
import styled from "styled-components";
import Letter from "./Letter";

const StyledWord = styled.div`
  display: inline-block;
  margin-right: 5px;
  //white-space: pre-wrap;
`;

interface Props {
  word: string;
  wordIdx: number;
}

const Word = ({ word, wordIdx }: Props) => {
  const letters = word.split("");

  return (
    <StyledWord>
      {letters.map((letter, i) => (
        <Letter letter={letter} letterIdx={i} wordIdx={wordIdx} key={i} />
      ))}
    </StyledWord>
  );
};

export default Word;
