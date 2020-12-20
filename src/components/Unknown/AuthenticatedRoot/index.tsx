import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import OnboardingScreen from '../../Auth/OnboardingScreen';
import NotFoundScreen from '../NotFoundScreen';

const AuthenticatedRoot: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <>main stuff: name & color</>} />
    <Route exact path="/signup" component={() => <Redirect to="/" />} />
    <Route exact path="/onboarding" component={OnboardingScreen} />
    <Route path="*" component={NotFoundScreen} />
  </Switch>
);

export default AuthenticatedRoot;
