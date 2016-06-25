import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

export default class Root extends React.Component {

    static propTypes = {
        history: React.PropTypes.object.isRequired,
        routes: React.PropTypes.element.isRequired,
        store: React.PropTypes.object.isRequired
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
                        {this.props.routes}
                    </Router>
                    {this.devTools}
                </div>
            </Provider>
        )
    }
}
