import React from "react";
import styled from "styled-components";
import Word from "./Word";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

const StyledWrapper = styled.div<{ isFocused: boolean }>`
  width: 60%;
  position: relative;
  text-align: justify;
  filter: blur(${({ isFocused }) => (isFocused ? 0 : 20)}px);
`;

const Text = ({ isFocused }: { isFocused: boolean }) => {
  const words = useSelector((state: AppState) => state.words);

  return (
    <StyledWrapper isFocused={isFocused}>
      {typeof words === "string" ? (
        <div>loading...</div>
      ) : (
        words.map((word, i) => <Word word={word} wordIdx={i} key={i} />)
      )}
    </StyledWrapper>
  );
};

export default Text;
