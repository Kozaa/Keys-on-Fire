import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import { useDispatch, useSelector } from "react-redux";
import { GO_FORWARDS } from "../redux/actionTypes";

const StyledWrapper = styled.div`
  width: 60%;
  position: relative;
`;

const data = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat, neque enim cumque ipsa nihil reprehenderit sequi ut debitis adipisci.".split(
  ""
);

const Text = () => {
  const currentLetter = useSelector<number, number>((state) => state);
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      {data.map((item, i) => (
        <Letter character={item} current={currentLetter} i={i} key={i} />
      ))}
      <div>current letter: {currentLetter}</div>
      <button onClick={() => dispatch({ type: GO_FORWARDS })}>add</button>
    </StyledWrapper>
  );
};

export default Text;
