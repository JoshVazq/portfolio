import { profileMiddleware } from "./middleware";
import * as actions from "./actions";
import { API_REQUEST, API_SUCCESS, API_ERROR } from "../api/actions";
import { SET_LOADER } from "../ui/actions";
import { Profile } from "../../model/profile";
import { profileReducer } from "./reducer";
import { getProfile } from "./selectors";


describe('profile', () => {
    describe('middleware', () => {

        it('should not apply middleware when is not a expected action', () => {
            const action = { type: "[TEST] Set" };
            const fakeNext = jest.fn();
            profileMiddleware()(fakeNext)(action);
            expect(fakeNext).toBeCalledWith(action);
            expect(fakeNext.mock.calls.length).toBe(1);
        })

        it('should dispatch API_REQUEST and SET_LOADER true on fetch profile', () => {
            const action = { type: actions.FETCH_PROFILE, payload: "1" };
            const fakeNext = jest.fn();
            profileMiddleware()(fakeNext)(action);
            expect(fakeNext).toBeCalledWith(action);
            const apiRequestAction = fakeNext.mock.calls[1][0];
            const setLoaderAction = fakeNext.mock.calls[2][0];

            expect(apiRequestAction.type).toContain(API_REQUEST);
            expect(apiRequestAction.meta.entity).toEqual(actions.PROFILE);
            expect(setLoaderAction.type).toContain(SET_LOADER);
            expect(setLoaderAction.payload).toBe(true);
            expect(fakeNext.mock.calls.length).toBe(3);
        })

        it('should dispatch SET_PROFILE and SET_LOADER false on api success', () => {
            const profile = {}
            const action = { type: `${actions.PROFILE} ${API_SUCCESS}`, payload: profile };
            const fakeNext = jest.fn();
            profileMiddleware()(fakeNext)(action);
            expect(fakeNext).toBeCalledWith(action);
            const apiRequestAction = fakeNext.mock.calls[1][0];
            const setLoaderAction = fakeNext.mock.calls[2][0];

            expect(apiRequestAction.type).toContain(actions.SET_PROFILE);
            expect(apiRequestAction.payload).toBe(profile);
            expect(setLoaderAction.type).toContain(SET_LOADER);
            expect(setLoaderAction.payload).toBe(false);
            expect(fakeNext.mock.calls.length).toBe(3);
        })

        it('should dispatch SET_LOADER false on api error', () => {
            const profile = {}
            const action = { type: `${actions.PROFILE} ${API_ERROR}` };
            const fakeNext = jest.fn();
            profileMiddleware()(fakeNext)(action);
            expect(fakeNext).toBeCalledWith(action);
            const setLoaderAction = fakeNext.mock.calls[1][0];

            expect(setLoaderAction.type).toContain(SET_LOADER);
            expect(setLoaderAction.payload).toBe(false);
            expect(fakeNext.mock.calls.length).toBe(2);
        })

    })
    describe('action creators', () => {
        it('should create profile fetch', () => {
            const profileId = "1";
            const action = actions.fetchProfile(profileId);
            expect(action.type).toEqual(actions.FETCH_PROFILE);
            expect(action.payload).toEqual(profileId);
        })
        it('should create profile set', () => {
            const profile = new Profile();
            const action = actions.setProfile(profile);
            expect(action.type).toEqual(actions.SET_PROFILE);
            expect(action.payload).toEqual(profile);
        })
        it('should normalize a profile', () => {
            const profile = new Profile();
            const name = "name";
            const id = "1";
            profile.id = id;
            profile.name = name;
            const action = actions.setProfile(profile);
            const normalizedProfile = action.meta.normalize({ sys: { id }, fields: { name } })
            expect(normalizedProfile).toEqual(profile);
        })


    })
    describe('reducer', () => {
        it('should set the profile', () => {
            const profile = new Profile();
            const setProfile = actions.setProfile(profile);
            const state = profileReducer({}, setProfile);
            expect(state).toEqual(profile);
        })


    })
    describe('selectors', () => {
        it('should get the profile', () => {
            const profile = new Profile();
            const selected = getProfile({ profile });
            expect(selected).toEqual(profile);
        })


    })
})