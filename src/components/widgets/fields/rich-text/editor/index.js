import compose from 'lodash/flow';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const editor = createEditor();

const enhancement = compose(withReact, withHistory);

export default enhancement(editor);
