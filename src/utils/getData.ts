import * as actions from "../redux/actionTypes";
import { Dispatch } from "redux";
import pickRandomItemsFromArr from "./pickRandomItemsFormArr";

const urlBase =
  "https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?ml=";

const getData = (dispatch: Dispatch, endpoint: string) => {
  const url = urlBase + endpoint;

  return fetch(url)
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
    .catch((err: { message: string }) => {
      console.log(err);
      dispatch({
        type: actions.TEXT_LOAD_FAILURE,
        payload: {
          err,
        },
      });
    });
};

export default getData;
