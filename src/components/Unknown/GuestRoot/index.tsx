import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const GuestRoot: React.FC = () => (
  <Switch>
    <Route exact path="/signup" component={() => <>signup</>} />
    <Route path="*" component={() => <Redirect to="/signup" />} />
  </Switch>
);

export default GuestRoot;
