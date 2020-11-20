import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Reroll from "../assets/Reroll";
import Text from "./Text";
import getData from "../utils/getData";

const StyledWrapper = styled.div`
  max-height: 40%;
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  line-height: 1.3em;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
`;

const TextDisplay = () => {
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <Text />
      <Reroll handleClick={() => getData(dispatch)} />
    </StyledWrapper>
  );
};

export default TextDisplay;
