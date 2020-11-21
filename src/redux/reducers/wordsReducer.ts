import * as actions from "../actionTypes";

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

export default wordsReducer;
