## Folder structure

```
expertlead-ui/
├── packages/
│   ├── apps/
│   │   ├── portal/
│   │   │   ├── actions/
│   │   │   ├── components/
│   │   │   │   ├── app/
│   │   │   │   ├── pages/
│   │   │   │   ├── root/
│   │   │   │   └── index.js
│   │   │   ├── store/
│   │   │   ├── translations/
│   │   │   ├── index.js
│   │   │   ├── package.json
│   │   │   └── README.md
│   │   └── sales-booster/
│   │       ├── actions/
│   │       ├── components/
│   │       │   ├── app/
│   │       │   ├── pages/
│   │       │   ├── root/
│   │       │   └── index.js
│   │       ├── store/
│   │       ├── translations/
│   │       ├── index.js
│   │       ├── package.json
│   │       └── README.md
│   └── core/
│       ├── assets/
│       ├── components/
│       │   ├── providers/
│       │   ├── routes/
│       │   ├── style/
│       │   └── widgets/
│       ├── data/
│       ├── enums/
│       ├── error/
│       ├── helpers/
│       ├── history/
│       ├── hooks/
│       │   ├── clients/
│       │   ├── dom/
│       │   ├── services/
│       │   └── misc/
│       ├── locale/
│       ├── prop-types/
│       ├── stories/
│       ├── style/
│       └── themes/
│── .editorconfig
│── .gitignore
│── .prettierrc
│── lerna.json
│── package.json
└── README.md
```

# Imports

**Hypothetical file for illustration purposes:**
`expertlead-ui/packages/apps/portal/components/pages/sample`

```javascript
// absolute paths: external/3rd-party & EL's core modules
import { func } from 'prop-types';
import React, { useCallback } from 'react';
import { useAsyncDispatch, useI18n } from '@expertlead-ui/core/hooks';
import { Button } from '@expertlead-ui/core/components/widgets';

// absolute paths: current app modules
import { setSomething } from 'actions/something';

// relative paths: only referring to sibling files & folders
import messages from './messages';
import withStyle from './style';

const Sample = ({ useStyle }) => {
  const dispatch = useAsyncDispatch();
  const { title } = useI18n(messages);
  const onClick = useCallback(() => {
    dispatch(setSomething({ foo: 'bar' }));
  }, [dispatch]);
  const style = useStyle();

  return (
    <div {...style}>
      <Button onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};

Sample.propTypes = {
  useStyle: func.isRequired,
};

Sample.defaultProps = {};

export default withStyle(Sample);
```
