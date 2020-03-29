import { func } from 'prop-types';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useI18n, useRoutes } from 'hooks';
import { Menu as Container, Link } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import withStyle from './style';
import messages from './messages';

const Menu = ({ useStyle }) => {
  const { pathname: location } = useLocation();
  const routes = useRoutes();
  const edit = useMemo(() => `${location}/${routes.edit}`, [location, routes]);
  const i18n = useI18n(messages);
  const style = useStyle();

  return (
    <Container {...style}>
      <Option id="about-me">
        <Link to={routes.profile}>{i18n['about-me']}</Link>
      </Option>
      <Option id="skills">
        <Link to={routes.skills}>{i18n.skills}</Link>
      </Option>
      <Option id="experience">
        <Link to={routes.experience}>{i18n.experience}</Link>
      </Option>
      <Option id="education">
        <Link to={routes.education}>{i18n.education}</Link>
      </Option>
      <Option id="education">
        <Link to={edit}>{i18n.edit}</Link>
      </Option>
    </Container>
  );
};

Menu.propTypes = {
  useStyle: func.isRequired,
};

Menu.defaultProps = {};

export default withStyle(Menu);
