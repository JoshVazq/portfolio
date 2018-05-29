import * as actions from "./actions";
import { uiReducer } from "./reducer";
import { isLoading } from "./selectors";


describe('profile', () => {

    describe('action creators', () => {
        it('should create set loader', () => {
            const action = actions.setLoader(true);
            expect(action.type).toEqual(actions.SET_LOADER);
            expect(action.payload).toBe(true);
        })

    })
    describe('reducer', () => {
        it('should set isLoading true', () => {
            const setLoader = actions.setLoader(true);
            const state = uiReducer(null, setLoader);
            expect(state.loading).toEqual(true);
        })
        it('should set isLoading false', () => {
            const setLoader = actions.setLoader(false);
            const state = uiReducer(null, setLoader);
            expect(state.loading).toEqual(false);
        })


    })
    describe('selectors', () => {
        it('should get isLoading', () => {
            const selected = isLoading({ ui: { loading: true } });
            expect(selected).toBe(true);
        })


    })
})