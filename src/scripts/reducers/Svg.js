import * as ActionTypes from '../constants/ActionTypes';

const defaultState = [
{id: "0", type: "VanishingPoint", position: {x: 100, y: 100}},
{id: "1", type: "VanishingPoint", position: {x: 200, y: 200}}
];

function updatePosition(state, action) {
  return state.map((svg) => {
    if (svg.id != action.id) return svg;

    return Object.assign({}, state, {
      position: !state.position
    });
  });
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.POSITION_CHANGED:
      return updatePosition(state, action);
    default:
      return state;
  }
}
