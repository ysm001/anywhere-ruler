import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';

export default React.createClass({
  render() {
    return (
      <div className="navigation">
        <AppBar
          title={<span>Perspective Ruler</span>}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
      </div>
    );
  }
});
