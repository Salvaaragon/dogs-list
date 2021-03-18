import Home from '@Containers/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} />
    </Switch>
  );
};

export default Router;
