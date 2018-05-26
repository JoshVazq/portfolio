import { createStore } from "redux";
import { testReducer } from "./test/reducer";
export const store = createStore(testReducer, {
  message: "Redux"
});
