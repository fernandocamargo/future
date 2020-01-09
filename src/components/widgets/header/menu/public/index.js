import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Menu } from 'components/widgets';
import Item from 'components/widgets/menu/item';

import Phone from './phone';
import messages from './messages';

const Public = () => {
  const routes = useRoutes();
  const {
    'about-us': aboutUs,
    'why-expertlead': whyExpertlead,
    registration,
    contact,
  } = useI18n(messages);

  return (
    <Menu>
      <Item id="registration" url={routes.registration}>
        {registration}
      </Item>
      <Item id="about-us" url={routes['about-us']}>
        {aboutUs}
      </Item>
      <Item id="why-expertlead" url={routes['why-expertlead']}>
        {whyExpertlead}
      </Item>
      <Item id="contact">
        <span>{contact}</span>
        <Menu>
          <Item id="phone" url="tel:+4930209663144" target="_blank">
            <Phone />
          </Item>
        </Menu>
      </Item>
    </Menu>
  );
};

Public.propTypes = {};

Public.defaultProps = {};

export default Public;
