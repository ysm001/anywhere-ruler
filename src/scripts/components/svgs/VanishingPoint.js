import React from 'react';
import SvgComponent from './SvgComponent';
import * as SvgActions from '../../actions/SvgActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class VanishingPoint extends SvgComponent {
  onDrag(e) {
    const {dispatch} = this.props;
    const actions = bindActionCreators(SvgActions, dispatch);

    actions.setPosition({x: e.cx, y: e.cy});
  }

  render() {
    const {position} = this.props;
    return (
      <circle cx={position.x} cy={position.y} r="5" stroke="black" strokeWidth="1" fill="white"
      onMouseDown={::this.handleMouseDown} />
    )
  }
}

VanishingPoint.propTypes = {
  cx:  React.PropTypes.number.isRequired,
  cy:  React.PropTypes.number.isRequired
}

export default connect(state => state.Svg)(VanishingPoint);
