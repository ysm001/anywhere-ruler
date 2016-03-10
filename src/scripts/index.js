import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import App from './containers/App';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main')
);
