import React, { Fragment } from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider as Theming } from "styled-components";

import { default as theme } from "themes";
import { App, Style } from "components";

const Root = () => (
  <Router>
    <Theming theme={theme}>
      <Fragment>
        <Style />
        <App />
      </Fragment>
    </Theming>
  </Router>
);

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
