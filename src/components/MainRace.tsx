import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/store";
import { RaceStateEnum } from "../redux/reducers/raceStateReducer";
import * as actions from "../redux/actionTypes";
import RaceChoose from "./RaceChoose";

const StyledMainRace = styled.main`
  width: 100%;
  height: 70vh;
`;

const MainRace: React.FC = () => {
  const raceState = useSelector((state: AppState) => state.raceState);
  const dispatch = useDispatch();

  const renderSwitch = () => {
    switch (raceState) {
      case RaceStateEnum.CHOOSING:
        return <RaceChoose />;
      case RaceStateEnum.HOST:
        return <div>host</div>;
      case RaceStateEnum.JOINED:
        return <div>joined</div>;
    }
  };

  return <StyledMainRace>{renderSwitch()}</StyledMainRace>;
};

export default MainRace;
