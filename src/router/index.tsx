import Home from '@Containers/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
