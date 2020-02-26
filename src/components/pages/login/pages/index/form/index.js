import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Button, Link, Menu } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form },
  useStyle,
  goToRecoverPage,
  busy,
}) => {
  const {
    'recover-password': recoverPassword,
    title,
    description,
    action,
    actions,
    loading,
  } = useI18n(messages);
  const style = useStyle();

  console.log('here();');
  console.log('there();');

  return (
    <Form {...style}>
      <fieldset disabled={busy}>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <Button type="submit">{action}</Button>
        </div>
        <Menu title={actions}>
          <Option>
            <Link to={goToRecoverPage}>{recoverPassword}</Link>
          </Option>
        </Menu>
        {busy && (
          <p role="alert" aria-busy="true">
            {loading}
          </p>
        )}
      </fieldset>
    </Form>
  );
};

Form.propTypes = {
  useStyle: func.isRequired,
  goToRecoverPage: func.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
