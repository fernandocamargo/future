import { func } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Menu as Container, Link } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import { useMenu } from './hooks';
import messages from './messages';
import withStyle from './style';

const Menu = ({ useStyle }) => {
  const { editing, edit } = useMenu();
  const routes = useRoutes();
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
      {!editing && (
        <Option id="edit">
          <Link to={edit}>{i18n.edit}</Link>
        </Option>
      )}
    </Container>
  );
};

Menu.propTypes = {
  useStyle: func.isRequired,
};

Menu.defaultProps = {};

export default withStyle(Menu);
