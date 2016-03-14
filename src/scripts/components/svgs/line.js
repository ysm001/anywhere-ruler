import React from 'react';

class Circle extends React.Component {
  render() {
    return (
      <circle cx={this.props.x} cy={this.props.y} r={this.props.r} fill={this.props.color} />
    )
  }
}

Circle.propTypes = {
  x1:  React.PropTypes.number.isRequired,
  y1:  React.PropTypes.number.isRequired,
  x2:  React.PropTypes.number.isRequired,
  y2:  React.PropTypes.number.isRequired,
  r:  React.PropTypes.number.isRequired,
  color: React.PropTypes.string.isRequired
}

export default Circle;
