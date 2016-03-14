import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../utils/devTools';
import * as reducers from '../reducers/index';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
);

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
