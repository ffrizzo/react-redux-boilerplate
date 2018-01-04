import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(history, initialState) {
  let devTools = [];
  if (__DEBUG__) {
    if (window.devToolsExtension) {
      // If devToolsExtension is instaled on chrome configure to use the extension
      devTools = [window.devToolsExtension()];
    } else {
      /* eslint-disable global-require */
      devTools = [require('../containers/dev-tools').instrument()];
      /* eslint-enable global-require */
    }
  }

  const middlewares = [thunk, routerMiddleware(history)];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...devTools,
    ),
  );

  if (module.hot) { // Hot reload to improve development mode
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers');
      /* eslint-enable global-require */
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
