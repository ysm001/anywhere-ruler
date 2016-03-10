import React from 'react';
import Canvas from './Canvas';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

export default React.createClass({
  render() {
    return (
      <main>
        <Navigation />
        <Canvas />
        <Sidebar />
      </main>
    );
  }
});
