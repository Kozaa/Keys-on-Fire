import React, { useRef } from "react";
import styled from "styled-components";
import TextDisplay from "./TextDisplay";
import RaceButtons from "./RaceButtons";
import PlayerProgressDisplay from "./PlayerProgresDisplay";

const StyledWrapper = styled.main`
  width: 100%;
  height: 70vh;
`;

const LowerWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  host: boolean;
  started: boolean;
  DBstarted: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RaceDisplay = ({
  host,
  handleInputChange,
  started,
  DBstarted,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledWrapper>
      <TextDisplay
        handleInputChange={handleInputChange}
        DBstarted={DBstarted}
        started={started}
        ref={inputRef}
        myRef={inputRef}
      />
      <LowerWrapper>
        <PlayerProgressDisplay />
        <RaceButtons host={host} myRef={inputRef} />
      </LowerWrapper>
    </StyledWrapper>
  );
};

export default RaceDisplay;
