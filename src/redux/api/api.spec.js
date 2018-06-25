import * as actions from './actions';
import { apiMiddleware } from './middleware';
jest.mock('contentful', () => ({
  createClient: () => ({
    getEntries: jest.fn(params => {
      return new Promise((resolve, reject) => {
        if (params['sys.id'] == '2') {
          resolve({ items: [{}] });
        } else {
          reject({});
        }
      });
    })
  })
}));

describe('api', () => {
  const entity = '[TEST]';

  describe('action creators', () => {
    it('should create  API_REQUEST for a entity', () => {
      const action = actions.apiRequest(entity);
      expect(action.type).toContain(actions.API_REQUEST);
      expect(action.type).toContain(entity);
      expect(action.meta).toEqual({ entity });
    });
    it('should create API_REQUEST with metadata', () => {
      const field = 'field';
      const action = actions.apiRequest(entity, { field });
      expect(action.meta).toEqual({ entity, field });
    });
    it('should create  API_SUCCESS for a entity', () => {
      const payload = {};
      const action = actions.apiSuccess(payload, entity);
      expect(action.type).toContain(actions.API_SUCCESS);
      expect(action.type).toContain(entity);
      expect(action.payload).toBe(payload);
      expect(action.meta).toEqual({ entity });
    });
    it('should create  API_ERROR for a entity', () => {
      const error = {};
      const action = actions.apiError(error, entity);
      expect(action.type).toContain(actions.API_ERROR);
      expect(action.type).toContain(entity);
      expect(action.payload).toBe(error);
      expect(action.meta).toEqual({ entity });
    });
  });
  describe('middleware', () => {
    it('should dispatch apiSuccess', async () => {
      const dispatch = jest.fn();
      const fakeStore = { dispatch };
      const fakeNext = jest.fn();
      const entryId = '2';
      const action = {
        type: `${entity} ${actions.API_REQUEST}`,
        meta: { entity, entryId }
      };
      await apiMiddleware(fakeStore)(fakeNext)(action);
      expect(fakeNext).toBeCalledWith(action);
      const success = fakeStore.dispatch.mock.calls[0][0];
      expect(success.type).toContain(actions.API_SUCCESS);
    });

    it('should dispatch apiError', async () => {
      const dispatch = jest.fn();
      const fakeStore = { dispatch };
      const fakeNext = jest.fn();
      const entryId = '3';
      const action = {
        type: `${entity} ${actions.API_REQUEST}`,
        meta: { entity, entryId }
      };
      await apiMiddleware(fakeStore)(fakeNext)(action);
      expect(fakeNext).toBeCalledWith(action);
      const error = fakeStore.dispatch.mock.calls[0][0];
      expect(error.type).toContain(actions.API_ERROR);
    });

    it('should do nothing if is not API_REQUEST', async () => {
      const dispatch = jest.fn();
      const fakeStore = { dispatch };
      const fakeNext = jest.fn();
      const action = { type: `${entity}` };
      await apiMiddleware(fakeStore)(fakeNext)(action);
      expect(fakeNext).toBeCalledWith(action);
      expect(fakeStore.dispatch).not.toBeCalled();
    });
  });
});
