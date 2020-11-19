import * as actions from "./actionTypes";
import { combineReducers } from "redux";

type LetterAction = {
  type: typeof actions.GO_FORWARDS | typeof actions.GO_BACKWARDS;
};

const currentLetter = (state = 0, action: LetterAction) => {
  switch (action.type) {
    case actions.GO_FORWARDS:
      return state + 1;
    case actions.GO_BACKWARDS:
      return state - 1;
    default:
      return state;
  }
};

type TextAction = {
  type: typeof actions.TEXT_LOAD_FAILURE | typeof actions.TEXT_LOAD_SUCCESS;
  payload: {
    words?: string[];
    err?: any;
  };
};

const currentWords = (state = [], action: TextAction) => {
  switch (action.type) {
    case actions.TEXT_LOAD_SUCCESS:
      return action.payload.words;

    case actions.TEXT_LOAD_FAILURE:
      return action.payload.err;

    default:
      return state;
  }
};

const reducers = combineReducers({
  letter: currentLetter,
  words: currentWords,
});

export default reducers;
