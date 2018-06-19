import { createStore, combineReducers, applyMiddleware } from 'redux';

import { uiReducer } from './ui/reducer';
import { profileReducer } from './profile/reducer';

import { profileMiddleware } from './profile/middleware';
import { apiMiddleware } from './api/middleware';
import { normalizeMiddleware } from './normalize/middleware';

export const configureStore = () => {
  const rootReducer = combineReducers({
    profile: profileReducer,
    ui: uiReducer
  });
  const appMiddleware = [profileMiddleware];
  const coreMiddleware = [apiMiddleware, normalizeMiddleware];

  const enhancer = applyMiddleware(...appMiddleware, ...coreMiddleware);
  return createStore(
    rootReducer,
    /* istanbul ignore next */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
  );
};
