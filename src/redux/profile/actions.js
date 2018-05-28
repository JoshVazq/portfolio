import { Profile } from '../../model/profile';
// entity name
export const PROFILE = "[Profile]";

// action types
export const FETCH_PROFILE = `${PROFILE} Fetch`;
export const SET_PROFILE = `${PROFILE} Set`;

//  action creators
export const fetchProfile = id => ({
  type: FETCH_PROFILE,
  payload: id
});

export const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
  meta: { normalize: data => Profile.fromContentful(data) }
});
