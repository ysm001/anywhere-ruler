import React from 'react';
import Circle from '../components/svgs/circle';

export default React.createClass({
  render() {
    return (
      <div className="editor">
        <svg className="editor__svg-container">
          <Circle x="100" y="100" r="10" color="red"/>
        </svg>
      </div>
    );
  }
});
