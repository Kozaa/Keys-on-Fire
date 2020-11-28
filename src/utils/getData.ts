import * as actions from "../redux/actionTypes";
import { Dispatch } from "redux";
import pickRandomItemsFromArr from "./pickRandomItemsFormArr";
import { CommonWordSet, numberOfWords } from "./constatnts";

const urlBase =
  "https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?ml=";

const getData = (dispatch: Dispatch, endpoint: string) => {
  dispatch({ type: actions.TEXT_LOADING });

  if (endpoint === "common words") {
    dispatch({
      type: actions.SET_WORD_SET,
      payload: {
        words: pickRandomItemsFromArr(CommonWordSet, numberOfWords),
      },
    });
    return;
  }

  const url = urlBase + endpoint;

  fetch(url)
    .then((res) => res.json())
    .then((data) => data.map((item) => item.word))
    .then((data) => pickRandomItemsFromArr(data, numberOfWords))
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
