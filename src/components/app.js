import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';

import './styles/app.scss';

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
