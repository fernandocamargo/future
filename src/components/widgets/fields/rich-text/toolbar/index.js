import { func } from 'prop-types';
import React from 'react';
import {
  Code,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
} from '@material-ui/icons';

import Button from './button';
import withStyle from './style';

const Toolbar = ({ useStyle }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <Button>
        <FormatBold />
      </Button>
      <Button>
        <FormatItalic />
      </Button>
      <Button>
        <FormatUnderlined />
      </Button>
      <Button>
        <Code />
      </Button>
      <Button>
        <FormatQuote />
      </Button>
      <Button>
        <FormatListBulleted />
      </Button>
      <Button>
        <FormatListNumbered />
      </Button>
    </div>
  );
};

Toolbar.propTypes = {
  useStyle: func.isRequired,
};

Toolbar.defaultProps = {};

export default withStyle(Toolbar);
