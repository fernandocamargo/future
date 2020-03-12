import { func } from 'prop-types';
import React from 'react';

import { useRoutes } from 'hooks';
import { Menu as Container, Link } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import withStyle from './style';

const Menu = ({ useStyle }) => {
  const routes = useRoutes();
  const style = useStyle();

  return (
    <Container {...style}>
      <Option id="about-me">
        <Link to={routes.profile}>About me</Link>
      </Option>
      <Option id="skills">
        <Link to={routes.skills}>Skills</Link>
      </Option>
      <Option id="experience">
        <Link to={routes.experience}>Experience</Link>
      </Option>
      <Option id="education">
        <Link to={routes.education}>Education</Link>
      </Option>
    </Container>
  );
};

Menu.propTypes = {
  useStyle: func.isRequired,
};

Menu.defaultProps = {};

export default withStyle(Menu);
