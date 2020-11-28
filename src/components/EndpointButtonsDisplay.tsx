import React from "react";
import styled from "styled-components";
import EndpointButton from "./EndpointButton";
import { Endpoints } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actionTypes";
import pickRandomItemsFromArr from "../utils/pickRandomItemsFormArr";
import { CommonWordSet, numberOfWords } from "../utils/constatnts";

const StyledWrapper = styled.div`
  height: 30vh;
  width: 100%;
  padding: 20px;
`;

const ButtonsWrapper = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  align-items: center;
  align-content: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const H1 = styled.span`
  font-size: 0.7em;
  margin-left: 100px;
`;

const EndpointButtonsDisplay = () => {
  const dispatch = useDispatch();

  const handleEndpointChange = (endpoint: string) => {
    dispatch({
      type: actions.SET_ENDPOINT,
      payload: {
        endpoint: endpoint,
      },
    });
  };
  const handleCommonWords = () => {
    dispatch({
      type: actions.SET_WORD_SET,
      payload: {
        words: pickRandomItemsFromArr(CommonWordSet, numberOfWords),
      },
    });

    dispatch({
      type: actions.SET_ENDPOINT,
      payload: {
        endpoint: "common words",
      },
    });
  };

  return (
    <StyledWrapper>
      <H1>Word set:</H1>
      <ButtonsWrapper>
        {Endpoints.map((endpoint) => (
          <EndpointButton
            key={endpoint}
            endpoint={endpoint}
            handleClick={handleEndpointChange}
          />
        ))}
        <EndpointButton
          endpoint="common words"
          handleClick={handleCommonWords}
        />
      </ButtonsWrapper>
    </StyledWrapper>
  );
};

export default EndpointButtonsDisplay;
