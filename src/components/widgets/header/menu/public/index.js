import { func } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Link, Menu } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import Phone from './phone';
import messages from './messages';
import withStyle from './style';

const Public = ({ useStyle }) => {
  const routes = useRoutes();
  const {
    'about-us': aboutUs,
    'why-expertlead': whyExpertlead,
    login,
    contact,
  } = useI18n(messages);
  const style = useStyle();

  return (
    <Menu {...style}>
      <Option id="login">
        <Link to={routes.login}>{login}</Link>
      </Option>
      <Option id="about-us">
        <Link to={routes['about-us']}>{aboutUs}</Link>
      </Option>
      <Option id="why-expertlead">
        <Link to={routes['why-expertlead']}>{whyExpertlead}</Link>
      </Option>
      <Option id="contact">
        <span>{contact}</span>
        <Menu>
          <Option id="phone">
            <Phone />
          </Option>
        </Menu>
      </Option>
    </Menu>
  );
};

Public.propTypes = {
  useStyle: func.isRequired,
};

Public.defaultProps = {};

export default withStyle(Public);
