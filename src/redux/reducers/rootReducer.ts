import { combineReducers } from "redux";
import currentLetterReducer from "./currentLetterReducer";
import currentWordReducer from "./currentWordReducer";
import wordsReducer from "./wordsReducer";
import failedLettersReducer from "./failedLettersReducer";
import timerReducer from "./timerReducer";
import endpointReducer from "./endpointReducer";
import { raceStateReducer } from "./raceStateReducer";
import raceDataReducer from "./raceDataReducer";

const RootReducer = combineReducers({
  words: wordsReducer,
  word: currentWordReducer,
  letter: currentLetterReducer,
  failedLetters: failedLettersReducer,
  timer: timerReducer,
  endpoint: endpointReducer,
  raceState: raceStateReducer,
  raceData: raceDataReducer,
});

export { RootReducer };
