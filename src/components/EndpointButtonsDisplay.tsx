import React from "react";
import styled from "styled-components";
import EndpointButton from "./EndpointButton";
import { Endpoints } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actionTypes";
import pickRandomItemsFromArr from "../utils/pickRandomItemsFormArr";
import { CommonWordSet, numberOfWords } from "../utils/constatnts";

const StyledWrapper = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  gap: 24px;
`;

interface Props {
  myRef: React.RefObject<HTMLInputElement>;
}

const EndpointButtonsDisplay = ({ myRef }: Props) => {
  const dispatch = useDispatch();

  const handleEndpointChange = (endpoint: string) => {
    dispatch({
      type: actions.SET_ENDPOINT,
      payload: {
        endpoint: endpoint,
      },
    });
    myRef.current!.focus();
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
    myRef.current!.focus();
  };

  return (
    <StyledWrapper>
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
