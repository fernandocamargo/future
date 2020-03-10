import { func } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import * as form from 'prop-types/definitions/form';
import { Link, Menu } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form: Container, Fieldset, Submit, Loader },
  useStyle,
}) => {
  const routes = useRoutes();
  const {
    'recover-password': recoverPassword,
    title,
    description,
    action,
    actions,
    loading,
  } = useI18n(messages);
  const style = useStyle();

  return (
    <Container {...style}>
      <Fieldset>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <Submit>{action}</Submit>
        </div>
        <Menu title={actions}>
          <Option>
            <Link to={routes['recover-password']}>{recoverPassword}</Link>
          </Option>
        </Menu>
        <Loader>
          <p>{loading}</p>
        </Loader>
      </Fieldset>
    </Container>
  );
};

Form.propTypes = {
  useStyle: func.isRequired,
  ...form,
};

Form.defaultProps = {};

export default withStyle(Form);
