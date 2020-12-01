import * as actions from "../actionTypes";

type RaceDataType = {
  name: string;
  connectedGameID: string;
};

type ActionType = {
  type: typeof actions.RACE_DATA_UPDATE;
  payload: {
    name: string;
    gameID: string;
  };
};

const initialState = {
  name: "",
  connectedGameID: "",
};

const raceDataReducer = (
  state: RaceDataType = initialState,
  action: ActionType
): RaceDataType => {
  switch (action.type) {
    case actions.RACE_DATA_UPDATE:
      return {
        name: action.payload.name,
        connectedGameID: action.payload.gameID,
      };
    default:
      return state;
  }
};

export default raceDataReducer;
