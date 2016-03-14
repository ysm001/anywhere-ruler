import React from 'react';

class Horizon extends React.Component {
  render() {
    return (
      <line x1="0" y1={this.props.y} x2={document.body.clientWidth} y2={this.props.y} stroke="black" storeWidth="2" />
    )
  }
}

Horizon.propTypes = {
  y:  React.PropTypes.number.isRequired
}

export default Horizon;
