import React, { Fragment } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';
import { IntlProvider as I18n } from 'react-intl';

import store, { persistor } from 'store';
import * as translations from 'translations';
import { default as theme } from 'themes';
import { App, Style } from 'components';
import { Loader } from 'components/widgets';

const normalize = string => String(string).replace(/[^a-zA-Z]+/g, '');

const Root = () => {
  const {
    settings: { locale },
  } = store.getState();
  const normalized = normalize(locale);
  const { [normalized]: messages } = translations;

  return (
    <StateManager store={store}>
      <StatePersistence persistor={persistor} loading={<Loader />}>
        <Router>
          <I18n locale={locale} messages={messages}>
            <Theming theme={theme}>
              <Fragment>
                <Style />
                <App />
              </Fragment>
            </Theming>
          </I18n>
        </Router>
      </StatePersistence>
    </StateManager>
  );
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
