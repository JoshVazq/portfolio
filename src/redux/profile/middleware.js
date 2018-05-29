import { PROFILE, FETCH_PROFILE, setProfile } from "./actions";
import { apiRequest, API_SUCCESS, API_ERROR } from "../api/actions";
import { setLoader } from "../ui/actions";

export const profileMiddleware = () => (next: Function) => (action: any) => {
  next(action);

  switch (action.type) {
    case FETCH_PROFILE:
      next(apiRequest(PROFILE, { entryId: action.payload }));
      next(setLoader(true));
      break;

    case `${PROFILE} ${API_SUCCESS}`:
      next(setProfile(action.payload));
      next(setLoader(false));
      break;

    case `${PROFILE} ${API_ERROR}`:
      next(setLoader(false));
      break;
  }
};
