import { normalizeMiddleware } from './middleware';

describe('normalize', () => {
  const ignoreAction = action => {
    const fakeNext = jest.fn();
    normalizeMiddleware()(fakeNext)(action);
    expect(fakeNext).toBeCalledWith(action);
  };

  it('should not apply when there is no meta attribute', () => {
    const action = { type: '[TEST] Set' };
    ignoreAction(action);
  });

  it('should not apply when there is no meta.normalize attribute', () => {
    const action = { type: '[TEST] Set', meta: {} };
    ignoreAction(action);
  });

  it('should not apply when meta.normalize is not a function', () => {
    const action = { type: '[TEST] Set', meta: {} };
    ignoreAction(action);
  });

  it('should apply when there is meta.normalize attribute', () => {
    const action = {
      type: '[TEST] Set',
      meta: { normalize: data => parseInt(data) },
      payload: '2'
    };
    const fakeNext = jest.fn();
    normalizeMiddleware()(fakeNext)(action);
    const normalized = fakeNext.mock.calls[0][0];
    expect(normalized.payload).toBe(2);
  });
});
