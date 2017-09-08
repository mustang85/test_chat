import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import chatReducers from 'reducers/index';

const logger = createLogger();

const store = createStore(
  chatReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger));

export default store;
