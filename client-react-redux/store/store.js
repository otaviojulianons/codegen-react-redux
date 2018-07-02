import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { callServiceMiddleware } from './actions/helpers';

const configureStore = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const middlewares = [multi, thunk, promise, callServiceMiddleware];
  const store = applyMiddleware(...middlewares)(createStore)(reducers, devTools);
  return store;
};

export default configureStore;
