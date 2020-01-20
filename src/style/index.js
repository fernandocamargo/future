import { createElement, forwardRef } from 'react';
import styled from 'styled-components';

export default (...rules) => component => {
  const render = ({ className, ...props }, ref) => {
    const { id } = props;
    const useStyle = () => ({ ...(!!id && { itemProp: id }), ref, className });

    return createElement(component, { ...props, useStyle });
  };
  const apply = styled(forwardRef(render));

  return apply(...rules);
};
