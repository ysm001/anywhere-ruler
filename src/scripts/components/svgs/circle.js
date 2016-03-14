import React from 'react';

class VanishingPoint extends React.Component {
  render() {
    return (
      <circle cx={this.props.cx} cy={this.props.cy} r={5} fill="red" />
    )
  }
}

VanishingPoint.propTypes = {
  cx:  React.PropTypes.number.isRequired,
  cy:  React.PropTypes.number.isRequired,
}

export default VanishingPoint;
