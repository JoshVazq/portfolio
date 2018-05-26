import { createReducer } from "../utils";
import { CHANGE_MESSAGE } from "./actions";

export const testReducer = createReducer(
  {},
  {
    [CHANGE_MESSAGE]: (state, action) => {
      const message = action.payload.trim();
      console.log(action);
      return { ...state, message };
    }
  }
);
