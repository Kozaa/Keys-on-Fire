import { combineReducers } from "redux";
import currentLetterReducer from "./currentLetterReducer";
import currentWordReducer from "./currentWordReducer";
import wordsReducer from "./wordsReducer";
import failedLettersReducer from "./failedLettersReducer";
import timerReducer from "./timerReducer";
import endpointReducer from "./endpointReducer";

const RootReducer = combineReducers({
  words: wordsReducer,
  word: currentWordReducer,
  letter: currentLetterReducer,
  failedLetters: failedLettersReducer,
  timer: timerReducer,
  endpoint: endpointReducer,
});

export { RootReducer };
