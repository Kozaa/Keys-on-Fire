import * as actions from "../actionTypes";

type WordsAction = {
  type:
    | typeof actions.TEXT_LOAD_FAILURE
    | typeof actions.TEXT_LOAD_SUCCESS
    | typeof actions.SET_WORD_SET
    | typeof actions.TEXT_LOADING;
  payload: {
    words?: string[];
    err?: {
      message: string;
    };
  };
};

const wordsReducer = (
  state: string[] | string = [],
  action: WordsAction
): string[] | string => {
  switch (action.type) {
    case actions.TEXT_LOADING:
      return "loading";

    case actions.TEXT_LOAD_SUCCESS:
      return action.payload.words!;

    case actions.TEXT_LOAD_FAILURE:
      return [`Sorry, something went wrong (${action.payload.err!.message})`];

    case actions.SET_WORD_SET:
      return action.payload.words!;

    default:
      return state;
  }
};

export default wordsReducer;
