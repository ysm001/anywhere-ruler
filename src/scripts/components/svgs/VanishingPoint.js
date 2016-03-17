import React from 'react';
import SvgComponent from './SvgComponent';
import * as SvgActions from '../../actions/SvgActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class VanishingPoint extends SvgComponent {
  onDrag(e) {
    console.log(this.props);
    this.setPosition(id, e.cx, e.cy);
  }

  render() {
    // const {position} = this.props[this.props.id];
    console.log(`render: ${this.props.id}`);
    console.log(this.props);
    const position = {x: 0, y: 0};

    return (
      <circle cx={position.x} cy={position.y} r="5" stroke="black" strokeWidth="1" fill="white"
      onMouseDown={this.handleMouseDown.bind(this)} />
    )
  }
}

export default connect()(VanishingPoint);
