import * as actions from "../actionTypes";

type FailedLetter = [number, number];

type failedLettersType = FailedLetter[];

type Action = {
  type:
    | typeof actions.ADD_FAILED_LETTER
    | typeof actions.RESET_FAILED_LETTERS
    | typeof actions.GAME_RESET;
  payload?: {
    letter: FailedLetter;
  };
};

const failedLettersReducer = (
  state: failedLettersType = [],
  action: Action
): failedLettersType => {
  switch (action.type) {
    case actions.ADD_FAILED_LETTER:
      if (
        state.some((a) => action.payload?.letter!.every((v, i) => v === a[i]))
      ) {
        return state;
      } else {
        return [...state, action.payload?.letter!];
      }
    case actions.RESET_FAILED_LETTERS:
      return [];
    case actions.GAME_RESET:
      return [];
    default:
      return state;
  }
};

export default failedLettersReducer;
