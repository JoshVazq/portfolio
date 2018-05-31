import { createReducer } from "../utils";
import { SET_PROFILE } from "./actions";

const initState = {};

export const profileReducer = createReducer(initState, {
  [SET_PROFILE]: (state, action) => {
    console.log(action.payload);
    //console.log(JSON.stringify(action.payload));
    return action.payload;
  }
});
