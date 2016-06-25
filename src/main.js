import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import Root from './containers/root'
import configureStore from './store/configure-store'

const store = configureStore(browserHistory, window.___INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root history={history} routes={routes} store={store}/>,
    document.getElementById('app')
)
