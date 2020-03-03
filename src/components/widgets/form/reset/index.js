import React from 'react';

import { ref } from 'prop-types/definitions';
import { Button } from 'components/widgets';

const Reset = ({ buttonRef, ...props }) => (
  <Button {...props} ref={buttonRef} type="reset" />
);

Reset.propTypes = {
  buttonRef: ref.isRequired,
};

Reset.defaultProps = {};

export default Reset;
