import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import App from '../components/app'

export default class Root extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    }

    get devTools(){
        if(__DEBUG__ && !window.devToolsExtension){
            const DevTools = require('containers/dev-tools')
            return <DevTools/>
        }
    }

    render () {
        return (
            <Provider store={this.props.store}>
                <div style={{ height: '100%', width: '100%' }}>
                    <Router history={this.props.history}>
                      <App />
                    </Router>
                    {this.devTools}
                </div>
            </Provider>
        )
    }
}
