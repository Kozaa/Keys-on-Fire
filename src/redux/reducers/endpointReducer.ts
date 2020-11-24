import * as actions from "../actionTypes";
import { Endpoints } from "../../utils/constatnts";

type ActionType = {
  type: typeof actions.SET_ENDPOINT;
  payload: {
    endpoint: string;
  };
};

const endpointReducer = (
  state: string = Endpoints[0],
  action: ActionType
): string => {
  switch (action.type) {
    case actions.SET_ENDPOINT:
      return action.payload.endpoint;
    default:
      return state;
  }
};

export default endpointReducer;
