import * as actions from "../redux/actionTypes";
import { Dispatch } from "redux";
import pickRandomItemsFromArr from "./pickRandomItemsFormArr";
import { CommonWordSet, numberOfWords } from "./constatnts";

const urlBase = "https://keys-on-fire-proxy.herokuapp.com/";

const getData = async (dispatch: Dispatch, endpoint: string) => {
  dispatch({ type: actions.TEXT_LOADING });

  let finalWords: string[] = [];

  if (endpoint === "common words") {
    finalWords = pickRandomItemsFromArr(CommonWordSet, numberOfWords);

    dispatch({
      type: actions.SET_WORD_SET,
      payload: {
        words: finalWords,
      },
    });
    return finalWords;
  }

  const url = urlBase + endpoint;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => data.map((item) => item.word))
    .then((data) => {
      const helperArr = pickRandomItemsFromArr(data, numberOfWords);
      finalWords = helperArr;

      return helperArr;
    })
    .then((words: string[]) => {
      dispatch({
        type: actions.TEXT_LOAD_SUCCESS,
        payload: {
          words,
        },
      });
      return words;
    })
    .catch((err: { message: string }) => {
      console.log(err);
      dispatch({
        type: actions.TEXT_LOAD_FAILURE,
        payload: {
          err,
        },
      });
    });
  return finalWords;
};

export default getData;
