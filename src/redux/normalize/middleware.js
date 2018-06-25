export const normalizeMiddleware = () => (next: Function) => (action: any) => {
  if (action.type.includes('Set') && action.meta && typeof action.meta.normalize === 'function') {
    action.payload = action.meta.normalize(action.payload);
    next(action);
  } else {
    next(action);
  }
};
