import React from 'react';
import VanishingPoint from '../components/svgs/VanishingPoint';
import Horizon from '../components/svgs/Horizon';
import {connect} from 'react-redux';

class Editor extends React.Component {
  createSvgComponent(svg) {
    if (svg.type == 'VanishingPoint') {
      return <VanishingPoint key={svg.id} x={svg.position.x} y={svg.position.y} />;
    } else if (svg.type == 'Horizon') {
      return <Horizon key={svg.id} x={svg.position.x} y={svg.position.y} />;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="editor">
        <svg className="svg-root">
          {this.props.svgs.map((svg) => {
             return this.createSvgComponent(svg);
          })}
        </svg>
      </div>
    );
  }
};

export default connect((state) => {
  return {svgs: state.Svg};
})(Editor);
