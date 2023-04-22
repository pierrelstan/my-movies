import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../reducers/allReducers';
import thunk from 'redux-thunk';
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const createStoreWihMiddleWare = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk)),
);

const store = createStoreWihMiddleWare;
export default store;
