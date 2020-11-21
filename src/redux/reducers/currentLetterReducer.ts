import * as actions from "../actionTypes";

type LetterAction = {
  type:
    | typeof actions.NEXT_LETTER
    | typeof actions.PREVIOUS_LETTER
    | typeof actions.NEXT_WORD
    | typeof actions.GAME_RESET;
};

const currentLetterReducer = (state = 0, action: LetterAction): number => {
  switch (action.type) {
    case actions.NEXT_LETTER:
      return state + 1;
    case actions.PREVIOUS_LETTER:
      return state - 1;
    case actions.NEXT_WORD:
      return 0;
    case actions.GAME_RESET:
      return 0;
    default:
      return state;
  }
};

export default currentLetterReducer;
