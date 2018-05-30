import { createReducer } from "./utils";
import { configureStore } from "./store";

describe('store', () => {
    describe('utils', () => {
        it('createReducer should return a reduce and handle actions', () => {
            const fakeAction = { type: 'TEST', payload: "2" };
            const initialState = {};
            const fakeHandler = jest.fn((state, action) => ({ value: action.payload }));
            const reducer = createReducer(initialState, { [fakeAction.type]: fakeHandler });
            const state = reducer(initialState, fakeAction);
            expect(fakeHandler).toBeCalledWith(initialState, fakeAction);
            expect(state).toEqual({ value: fakeAction.payload });

        })

        it('createReducer should return a reduce and not handle not defined actions', () => {
            const fakeAction = { type: 'TEST' };
            const otherAction = { type: 'OTHER' };
            const initialState = {};
            const fakeHandler = jest.fn((state, action) => ({ value: action.payload }));
            const reducer = createReducer(initialState, { [fakeAction.type]: fakeHandler });
            const state = reducer(initialState, otherAction);
            expect(fakeHandler).not.toBeCalled();
            expect(state).toEqual(initialState);
        })
        it('createReducer should use initial state if not provided', () => {
            const fakeAction = { type: 'TEST' };
            const otherAction = { type: 'OTHER' };
            const intialState = { value: 1 };
            const reducer = createReducer(intialState, {});
            const state = reducer(undefined, otherAction);
            expect(state).toEqual(intialState);
        })

    })

    describe('configureStore', () => {

        it('should return the store', () => {
            const store = configureStore();
            expect(typeof store.dispatch).toBe("function");
            expect(typeof store.getState).toBe("function");

        })

    })

})