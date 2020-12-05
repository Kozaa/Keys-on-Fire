import * as actions from "../actionTypes";

type RaceDataType = {
  name: string;
  connectedGameID: string;
  started: boolean;
  startedPrev: boolean;
};

type ActionType = {
  type:
    | typeof actions.RACE_DATA_UPDATE
    | typeof actions.RACE_DATA_STARTED
    | typeof actions.RACE_DATA_STOPPED
    | typeof actions.RACE_DATA_STARTED_RESET;
  payload: {
    name?: string;
    gameID?: string;
  };
};

const initialState = {
  name: "",
  connectedGameID: "",
  started: false,
  startedPrev: false,
};

const raceDataReducer = (
  state: RaceDataType = initialState,
  action: ActionType
): RaceDataType => {
  switch (action.type) {
    case actions.RACE_DATA_UPDATE:
      return {
        ...state,
        name: action.payload.name!,
        connectedGameID: action.payload.gameID!,
      };
    case actions.RACE_DATA_STARTED:
      return {
        ...state,
        started: true,
        startedPrev: state.started,
      };
    case actions.RACE_DATA_STOPPED:
      return {
        ...state,
        started: false,
        startedPrev: state.started,
      };
    case actions.RACE_DATA_STARTED_RESET:
      return {
        ...state,
        started: false,
        startedPrev: false,
      };
    default:
      return state;
  }
};

export default raceDataReducer;
