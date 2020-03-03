import React from 'react';

import { ref } from 'prop-types/definitions';
import { Button } from 'components/widgets';

const Submit = ({ buttonRef, ...props }) => (
  <Button {...props} ref={buttonRef} type="submit" />
);

Submit.propTypes = {
  buttonRef: ref.isRequired,
};

Submit.defaultProps = {};

export default Submit;
