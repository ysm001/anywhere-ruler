import React from 'react';

class VanishingPoint extends React.Component {
  render() {
    return (
      <circle cx={this.props.x} cy={this.props.y} r="5" stroke="black" stroke-width="1" fill="none" />
    )
  }
}

VanishingPoint.propTypes = {
  cx:  React.PropTypes.number.isRequired,
  cy:  React.PropTypes.number.isRequired,
}

export default VanishingPoint;
