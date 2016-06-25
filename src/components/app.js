import React from 'react'

import 'style!./styles/app.scss';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.any
    }
    render () {
        return (
            <div className='container-fluid'>
                {this.props.children}
            </div>
        )
    }
}
