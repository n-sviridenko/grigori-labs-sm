import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IntlProvider } from 'react-intl';

import store from '../../../store';
import Root from '../Root';
import BasicLayout from '../BasicLayout';
import translations from '../../../common/translations';

const App: React.FC = () => {
  return (
    <IntlProvider
      key="en"
      locale="en"
      messages={translations.en}
    >
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL || '/'}>
          <CssBaseline />
          <BasicLayout>
            <Root />
          </BasicLayout>
        </Router>
      </Provider>
    </IntlProvider>
  );
};

export default App;
