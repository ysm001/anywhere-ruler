import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import App from './containers/App';

import DevTools from './utils/devTools';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

render(
    <Provider store={store}>
      <div className="devtools-wrapper">
        <App />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('main')
);
