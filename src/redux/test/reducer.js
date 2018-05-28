import { createReducer } from "../utils";
import { CHANGE_MESSAGE } from "./actions";
const initState = {
  message: "Redux"
};
export const testReducer = createReducer(initState, {
  [CHANGE_MESSAGE]: (state, action) => {
    const message = action.payload.trim();
    return { ...state, message };
  }
});
