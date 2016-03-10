// import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {devTools, persistState} from 'redux-devtools';
import * as reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// Configure the dev tools when in DEV mode
// if (__DEV__) {
//   createStoreWithMiddleware = compose(
//     applyMiddleware(thunkMiddleware),
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )(createStore);
// } else {
//   createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
// }

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
