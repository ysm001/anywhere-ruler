import {POSITION_CHANGED} from '../constants/ActionTypes';

export function setPosition(id, position) {
  return {
    type: POSITION_CHANGED,
    id,
    position
  }
}
