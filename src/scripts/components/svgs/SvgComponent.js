import React from 'react';
import * as SvgActions from '../../actions/SvgActions';
import {bindActionCreators} from 'redux';

class SvgComponent extends React.Component {
  constructor(props) {
    super(props);

    const {initX, initY} = this.props;
    this.setPosition(initX, initY);
  }

  onDrag(e) {}

  handleMouseDown(e) {
		e.preventDefault();

    const {position} = this.props;
		const rect = e.target.getBoundingClientRect();
		const offset = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }

    const handleMouseMove = ((e) => {
      e.cx = e.clientX - offset.x;
      e.cy = e.clientY - offset.y;
      this.onDrag(e);
    }).bind(this);

    const handleMouseUp = (e) => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseup', handleMouseUp);
    }

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseup', handleMouseUp);

		return false;
  }

  setPosition(x, y) {
    console.log(`set pos: ${this.props.id}`);
    const {id, dispatch} = this.props;
    const actions = bindActionCreators(SvgActions, dispatch);

    actions.setPosition(id, {x: x, y: y});
  }
}

export default SvgComponent;
