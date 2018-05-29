import * as actions from './actions';

describe('api', () => {
    const entity = "[TEST]";

    describe('action creators', () => {
        it('should create  API_REQUEST for a entity', () => {
            const action = actions.apiRequest(entity);
            expect(action.type).toContain(actions.API_REQUEST);
            expect(action.type).toContain(entity);
            expect(action.meta).toEqual({ entity });

        })
        it('should create API_REQUEST with metadata', () => {
            const field = "field"
            const action = actions.apiRequest(entity, { field });
            expect(action.meta).toEqual({ entity, field });

        })
        it('should create  API_SUCCESS for a entity', () => {
            const payload = {};
            const action = actions.apiSuccess(payload, entity);
            expect(action.type).toContain(actions.API_SUCCESS);
            expect(action.type).toContain(entity);
            expect(action.payload).toBe(payload);
            expect(action.meta).toEqual({ entity });

        })
        it('should create  API_ERROR for a entity', () => {
            const error = {};
            const action = actions.apiError(error, entity);
            expect(action.type).toContain(actions.API_ERROR);
            expect(action.type).toContain(entity);
            expect(action.payload).toBe(error);
            expect(action.meta).toEqual({ entity });

        })
    })
})