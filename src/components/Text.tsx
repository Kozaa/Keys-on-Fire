import React from "react";
import styled from "styled-components";
import Word from "./Word";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

const StyledWrapper = styled.div`
  width: 60%;
  position: relative;
  text-align: justify;
`;

const Text = () => {
  const words = useSelector((state: AppState) => state.words);

  return (
    <StyledWrapper>
      {typeof words === "string" ? (
        <div>loading...</div>
      ) : (
        words.map((word, i) => <Word word={word} wordIdx={i} key={i} />)
      )}
    </StyledWrapper>
  );
};

export default Text;
