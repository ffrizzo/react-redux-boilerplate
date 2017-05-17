import React from 'react'
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import Home from './home'

import 'style-loader!./styles/app.scss';

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.any
    }
    render () {
        return (
            <div className='container-fluid'>
                <Switch>
                  <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        )
    }
}
