import React from 'react';

class SvgComponent extends React.Component {
  onDrag(e) {}

  handleMouseDown(e) {
		e.preventDefault();

    const {position} = this.props;
		const rect = e.target.getBoundingClientRect();
		const offset = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }

    const handleMouseMove = (e) => {
      e.cx = e.clientX - offset.x;
      e.cy = e.clientY - offset.y;
      this.onDrag(e);
    }.bind(this);

    const handleMouseUp = (e) => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseup', handleMouseUp);
    }

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseup', handleMouseUp);

		return false;
  }
}

export default SvgComponent;
