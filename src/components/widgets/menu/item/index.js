import isString from 'lodash/isString';
import { checkPropTypes, shape, string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import List from '../list';
import withStyle from './style';

const Item = ({ className, id, label, url, items }) => {
  const history = useHistory();
  const { click, href } = useMemo(() => {
    const plain = isString(url);

    return {
      href: plain ? url : '/',
      click: plain ? () => history.push(url) : url,
    };
  }, [url, history]);
  const onClick = useCallback(
    event => {
      event.preventDefault();
      click();
    },
    [click]
  );

  return (
    <li className={className} itemProp={id}>
      <a href={href} title={label} onClick={onClick}>
        {label}
      </a>
      {!!items.length && <List items={items} />}
    </li>
  );
};

const log = something => console.log({ something }) || something;

const compose = function(...shapes) {
  console.log({ shapes });

  return function() {
    log(
      shapes.reduce((stack, shape) => {
        return console.log({ shape }) || stack;
      }, {})
    );
  };
};

Item.propTypes = compose({
  className: string.isRequired,
});

Item.defaultProps = {
  items: [],
};

export default withStyle(Item);
