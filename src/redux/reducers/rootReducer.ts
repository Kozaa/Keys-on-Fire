import { combineReducers } from "redux";
import currentLetterReducer from "./currentLetterReducer";
import currentWordReducer from "./currentWordReducer";
import wordsReducer from "./wordsReducer";
import failedLettersReducer from "./failedLettersReducer";
import timerReducer from "./timerReducer";

const RootReducer = combineReducers({
  words: wordsReducer,
  word: currentWordReducer,
  letter: currentLetterReducer,
  failedLetters: failedLettersReducer,
  timer: timerReducer,
});

export { RootReducer };
