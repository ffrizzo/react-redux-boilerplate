import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import App from '../components/app';

class Root extends Component {
  static devTools() {
    if (__DEBUG__ && !window.devToolsExtension) {
      /* eslint-disable global-require */
      const DevTools = require('../containers/dev-tools');
      /* eslint-enable global-require */
      return <DevTools />;
    }
    return null;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%', width: '100%' }}>
          <Router history={this.props.history}>
            <App />
          </Router>
          {this.devTools}
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;
