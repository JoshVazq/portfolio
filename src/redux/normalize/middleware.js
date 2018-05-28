export const normalizeMiddleware = ({ dispatch }) => next => action => {
  if (action.type.includes("Set") && action.meta.normalize) {
    action.payload = action.meta.normalize(action.payload);
    // fire the new action
    next(action);
  } else {
    next(action);
  }
};
