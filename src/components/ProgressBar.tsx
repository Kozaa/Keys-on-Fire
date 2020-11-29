import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
`;

const ColoredBar = styled.div`
  position: absolute;
  background-color: red;
  width: 50%;
  height: 100%;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;

const ProgressBar = () => {
  return (
    <StyledWrapper>
      <ColoredBar />
      <StyledSpan>Name</StyledSpan>
    </StyledWrapper>
  );
};

export default ProgressBar;
