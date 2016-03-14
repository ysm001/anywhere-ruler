import {POSITION_CHANGED} from '../constants/ActionTypes';

export function setPosition(position) {
  return {
    type: POSITION_CHANGED,
    position
  }
}
