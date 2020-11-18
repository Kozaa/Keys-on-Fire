import { Console } from "console";
import { GO_BACKWARDS, GO_FORWARDS } from "./actionTypes";

type Action = {
  type: typeof GO_FORWARDS | typeof GO_BACKWARDS;
};

export const currentLetter = (state = 0, action: Action) => {
  switch (action.type) {
    case GO_FORWARDS:
      return state + 1;
    case GO_BACKWARDS:
      return state - 1;
    default:
      return state;
  }
};
