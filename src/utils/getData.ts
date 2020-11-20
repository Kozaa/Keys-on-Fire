import * as actions from "../redux/actionTypes";
import { Dispatch } from "redux";
import pickRandomItemsFromArr from "./pickRandomItemsFormArr";

const api = "https://api.datamuse.com/words?ml=ringing+in+the+ears";

const getData = (dispatch: Dispatch) => {
  return fetch(api)
    .then((res) => res.json())
    .then((data) => data.map((item) => item.word))
    .then((data) => pickRandomItemsFromArr(data, 20))
    .then((words: string[]) =>
      dispatch({
        type: actions.TEXT_LOAD_SUCCESS,
        payload: {
          words,
        },
      })
    )
    .catch((err: { message: string }) =>
      dispatch({
        type: actions.TEXT_LOAD_FAILURE,
        payload: {
          err,
        },
      })
    );
};

export default getData;
