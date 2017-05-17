import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Root from './containers/root'
import configureStore from './store/configure-store'

const browserHistory = createHistory()
const store = configureStore(browserHistory, window.___INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root history={history} store={store}/>,
    document.getElementById('app')
)
