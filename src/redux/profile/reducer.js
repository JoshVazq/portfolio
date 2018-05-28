import { createReducer } from "../utils";
import { SET_PROFILE } from "./actions";

const initState = {};

export const profileReducer = createReducer(initState, {
  [SET_PROFILE]: (state, action) => {
    return action.payload;
  }
});
