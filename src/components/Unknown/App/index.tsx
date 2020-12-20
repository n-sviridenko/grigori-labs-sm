import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from '../../../store';
import Root from '../Root';
import BasicLayout from '../BasicLayout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <CssBaseline />
        <BasicLayout>
          <Root />
        </BasicLayout>
      </Router>
    </Provider>
  );
};

export default App;
