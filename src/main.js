import React from 'react';
import ReactDOM from 'react-dom';

import history from './history';
import Root from './containers/root';
import configureStore from './store/configure-store';

/* eslint-disable no-underscore-dangle */
const store = configureStore(history, window.___INITIAL_STATE__);
/* eslint-enable no-underscore-dangle */

ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
