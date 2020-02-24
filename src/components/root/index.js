import React, { Fragment } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';
import { IntlProvider as I18n } from 'react-intl';

import { default as theme } from 'themes';
import { App, Style } from 'components';
import { Notifications } from 'components/providers';
import { Loader } from 'components/widgets';

import { useRoot } from './hooks';

const Root = () => {
  const { store, persistor, history, ...i18n } = useRoot();

  return (
    <I18n {...i18n}>
      <StateManager store={store}>
        <StatePersistence persistor={persistor} loading={<Loader />}>
          <Router history={history}>
            <Theming theme={theme}>
              <Fragment>
                <Style />
                <Notifications>
                  <App />
                </Notifications>
              </Fragment>
            </Theming>
          </Router>
        </StatePersistence>
      </StateManager>
    </I18n>
  );
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
