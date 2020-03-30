import React from 'react';

const Form = ({
  components: { Form: Container, Fieldset, Submit, Loader },
  elements: {
    fields: { ordered },
  },
}) => (
  <Container>
    <Fieldset>
      {ordered}
      <div>
        <Submit>Save</Submit>
      </div>
      <Loader>
        <p>Loading...</p>
      </Loader>
    </Fieldset>
  </Container>
);

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
