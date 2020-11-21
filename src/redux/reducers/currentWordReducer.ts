import * as actions from "../actionTypes";

type WordAction = {
  type:
    | typeof actions.NEXT_WORD
    | typeof actions.PREVIOUS_WORD
    | typeof actions.GAME_RESET;
};

const currentWordReducer = (state = 0, action: WordAction): number => {
  switch (action.type) {
    case actions.NEXT_WORD:
      return state + 1;
    case actions.PREVIOUS_WORD:
      return state - 1;
    case actions.GAME_RESET:
      return 0;
    default:
      return state;
  }
};

export default currentWordReducer;
