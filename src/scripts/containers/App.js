import React from 'react';
import Editor from './Editor';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

export default React.createClass({
  render() {
    return (
      <main>
        <Navigation />
        <Editor />
      </main>
    );
  }
});
