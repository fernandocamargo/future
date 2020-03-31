import { func } from 'prop-types';
import React, { useMemo } from 'react';
import { Slate } from 'slate-react';

import { parse } from './helpers';
import editor from './editor';
import Toolbar from './toolbar';
import withStyle from './style';

const Editor = ({ value: markup, useStyle }) => {
  const value = useMemo(() => parse(markup), [markup]);
  const style = useStyle();

  return (
    <div {...style}>
      <Slate editor={editor} value={value} onChange={console.log}>
        <Toolbar />
      </Slate>
    </div>
  );
};

Editor.propTypes = {
  useStyle: func.isRequired,
};

Editor.defaultProps = {};

export default withStyle(Editor);
