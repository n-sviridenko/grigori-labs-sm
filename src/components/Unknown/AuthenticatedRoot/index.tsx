import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundScreen from '../NotFoundScreen';

const AuthenticatedRoot: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <>main stuff: name & color</>} />
    <Route exact path="/signup" component={() => <Redirect to="/" />} />
    <Route exact path="/onboarding/name" component={() => <>name</>} />
    <Route exact path="/onboarding/color" component={() => <>color</>} />
    <Route path="*" component={NotFoundScreen} />
  </Switch>
);

export default AuthenticatedRoot;
