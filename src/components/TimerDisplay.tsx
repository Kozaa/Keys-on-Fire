import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.grey};
`;

const TimerDisplay = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <StyledSpan>{counter}</StyledSpan>;
};

export default TimerDisplay;
