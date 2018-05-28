import { createReducer } from "../utils";

import { SET_LOADER } from "./actions";

const initState = {
  loading: false
};

export const uiReducer = createReducer(initState, {
  [SET_LOADER]: (state, action) => {
    return { ...state, loading: action.payload };
  }
});
