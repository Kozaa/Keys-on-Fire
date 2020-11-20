import * as actions from "./actionTypes";
import { combineReducers } from "redux";

type WordAction = {
  type: typeof actions.NEXT_WORD | typeof actions.PREVIOUS_WORD;
};

const currentWordReducer = (state = 0, action: WordAction): number => {
  switch (action.type) {
    case actions.NEXT_WORD:
      return state + 1;
    case actions.PREVIOUS_WORD:
      return state - 1;
    default:
      return state;
  }
};

type LetterAction = {
  type:
    | typeof actions.NEXT_LETTER
    | typeof actions.PREVIOUS_LETTER
    | typeof actions.NEXT_WORD;
};

const currentLetterReducer = (state = 0, action: LetterAction): number => {
  switch (action.type) {
    case actions.NEXT_LETTER:
      return state + 1;
    case actions.PREVIOUS_LETTER:
      return state - 1;
    case actions.NEXT_WORD:
      return 0;
    default:
      return state;
  }
};

type WordsAction = {
  type: typeof actions.TEXT_LOAD_FAILURE | typeof actions.TEXT_LOAD_SUCCESS;
  payload: {
    words?: string[];
    err?: {
      message: string;
    };
  };
};

const wordsReducer = (state: string[] = [], action: WordsAction): string[] => {
  switch (action.type) {
    case actions.TEXT_LOAD_SUCCESS:
      return action.payload.words!;

    case actions.TEXT_LOAD_FAILURE:
      return [action.payload.err!.message];

    default:
      return state;
  }
};

const RootReducer = combineReducers({
  words: wordsReducer,
  word: currentWordReducer,
  letter: currentLetterReducer,
});

export { RootReducer };
