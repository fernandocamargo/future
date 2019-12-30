import React, { Fragment } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';
import { IntlProvider as I18n } from 'react-intl';

import { default as theme } from 'themes';
import { App, Style } from 'components';
import { Loader } from 'components/widgets';

import { useI18n } from './hooks';

const Root = () => {
  const { store, persistor, ...i18n } = useI18n();

  return (
    <I18n {...i18n}>
      <StateManager store={store}>
        <StatePersistence persistor={persistor} loading={<Loader />}>
          <Router>
            <Theming theme={theme}>
              <Fragment>
                <Style />
                <App />
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
