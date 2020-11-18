import { createStore } from "redux";
import { currentLetter } from "./reducers";

const store = createStore(currentLetter);

export default store;
