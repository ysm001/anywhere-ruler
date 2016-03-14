import React from 'react';
import VanishingPoint from '../components/svgs/VanishingPoint';
import Horizon from '../components/svgs/Horizon';

export default React.createClass({
  render() {
    return (
      <div className="editor">
        <svg className="svg-root">
          <Horizon y={100} />
          <VanishingPoint />
          <VanishingPoint />
        </svg>
      </div>
    );
  }
});
