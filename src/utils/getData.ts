import * as actions from "../redux/actionTypes";

const api = "https://api.datamuse.com/words?ml=ringing+in+the+ears";

const getData = (dispatch) => {
  return fetch(api)
    .then((res) => res.json())
    .then((data) => data.map((item) => item.word))
    .then((data) => data.splice(0, 20))
    .then((words) =>
      dispatch({
        type: actions.TEXT_LOAD_SUCCESS,
        payload: {
          words,
        },
      })
    )
    .catch((err) =>
      dispatch({
        type: actions.TEXT_LOAD_FAILURE,
        payload: {
          err,
        },
      })
    );
};

export default getData;
