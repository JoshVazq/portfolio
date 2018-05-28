import { PROFILE, FETCH_PROFILE, setProfile } from "./actions";
import { apiRequest, API_SUCCESS, API_ERROR } from "../api/actions";
import { setLoader } from "../ui/actions";

export const profileMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_PROFILE:
      next(apiRequest(PROFILE, { entryId: action.payload }));
      next(setLoader(true, PROFILE));
      break;

    case `${PROFILE} ${API_SUCCESS}`:
      next(setProfile(action.payload));
      next(setLoader(false, PROFILE));
      break;

    case `${PROFILE} ${API_ERROR}`:
      next(setLoader(false, PROFILE));
      break;
  }
};
