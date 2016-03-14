import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
  position: {
    x: 0,
    y: 0
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.POSITION_CHANGED:
      return {...state, position: {x: action.position.x, y: action.position.y}};
    default:
      return state;
  }
}
