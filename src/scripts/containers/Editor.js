import React from 'react';
import VanishingPoint from '../components/svgs/VanishingPoint';

export default React.createClass({
  render() {
    return (
      <div className="editor">
        <svg className="editor__svg-container">
          <VanishingPoint x="100" y="100" />
        </svg>
      </div>
    );
  }
});
