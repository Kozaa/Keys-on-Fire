import * as actions from "../actionTypes";

export enum RaceStateEnum {
  CHOOSING,
  HOST,
  JOINED,
}

type RaceStateType = {
  type:
    | typeof actions.RACE_STATE_CHOOSING
    | typeof actions.RACE_STATE_HOST
    | typeof actions.RACE_STATE_JOINED;
};

export const raceStateReducer = (
  state: number = RaceStateEnum.CHOOSING,
  action: RaceStateType
) => {
  switch (action.type) {
    case actions.RACE_STATE_CHOOSING:
      return RaceStateEnum.CHOOSING;

    case actions.RACE_STATE_HOST:
      return RaceStateEnum.HOST;

    case actions.RACE_STATE_JOINED:
      return RaceStateEnum.JOINED;

    default:
      return state;
  }
};
