import React, { Fragment } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import store, { persistor } from 'store';
import { default as theme } from 'themes';
import { App, Style } from 'components';
import { Loader } from 'components/widgets';

const Root = () => (
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
);

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
