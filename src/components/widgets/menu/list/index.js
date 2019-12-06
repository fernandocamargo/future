import React from 'react';

import Item from '../item';

const renderItem = item => <Item key={item.id} {...item} />;

const List = ({ items }) => <ul>{items.map(renderItem)}</ul>;

List.propTypes = {};

List.defaultProps = {};

export default List;
