import * as actions from "../actionTypes";

type FailedLetter = [number, number];

type failedLettersType = FailedLetter[];

type Action = {
  type: typeof actions.ADD_FAILED_LETTER | typeof actions.RESET_FAILED_LETTERS;
  payload?: {
    letter: FailedLetter;
  };
};

const failedLettersReducer = (
  state: failedLettersType = [
    [0, 0],
    [0, 2],
  ],
  action: Action
): failedLettersType => {
  switch (action.type) {
    case actions.ADD_FAILED_LETTER:
      return [...state, action.payload?.letter!];
    case actions.RESET_FAILED_LETTERS:
      return [];
    default:
      return state;
  }
};

export default failedLettersReducer;
