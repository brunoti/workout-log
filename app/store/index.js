import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const middlewares = [];

middlewares.push(thunk);

if (__DEV__) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ duration: true, diff: true });
  middlewares.push(logger);
  console.log('[REDUX] Redux logger added!');
}

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
