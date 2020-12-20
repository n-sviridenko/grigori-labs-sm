import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignUpScreen from '../../Auth/SignUpScreen';

const GuestRoot: React.FC = () => (
  <Switch>
    <Route exact path="/signup" component={SignUpScreen} />
    <Route path="*" component={() => <Redirect to="/signup" />} />
  </Switch>
);

export default GuestRoot;
