import React from 'react';

import * as form from 'prop-types/definitions/form';

const Form = ({
  elements: {
    fields: {
      unordered: { 'remote-only': remoteOnly, availability },
    },
  },
  components: { Form: Container, Fieldset, Submit, Loader },
}) => (
  <Container>
    <Fieldset>
      <legend>Some legend</legend>
      <dl>
        <dt>Your availability</dt>
        <dd>{availability}</dd>
      </dl>
      <dl>
        <dt>Your work preference</dt>
        <dd>{remoteOnly}</dd>
      </dl>
      <div>
        <h3>Your location</h3>
      </div>
      <div>
        <h3>Your career focus</h3>
      </div>
      <div>
        <Submit>Save</Submit>
      </div>
      <Loader>
        <p>Loading...</p>
      </Loader>
    </Fieldset>
  </Container>
);

Form.propTypes = {
  ...form,
};

Form.defaultProps = {};

export default Form;
