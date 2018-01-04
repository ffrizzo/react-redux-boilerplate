// import 'style-loader!./styles/app.scss';

import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';

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
