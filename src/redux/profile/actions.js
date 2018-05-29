import { Profile } from '../../model/profile';

export const PROFILE = "[Profile]";

export const FETCH_PROFILE = `${PROFILE} Fetch`;
export const SET_PROFILE = `${PROFILE} Set`;

export const fetchProfile = (id: string) => ({
  type: FETCH_PROFILE,
  payload: id
});

export const setProfile = (profile: Profile) => ({
  type: SET_PROFILE,
  payload: profile,
  meta: { normalize: (data: any) => Profile.fromContentful(data) }
});
