# useAsyncDispatch()

This hook returns a reference to the `dispatch` function from the `Redux` store. You may use it to dispatch `actions` as needed.

## Options

This hooks has no options.

## Usage

```javascript
import React from 'react';

import { useAsyncDispatch } from 'hooks';
import { someAction } from 'actions/some/action';

const Sample = () => {
  const dispatch = useAsyncDispatch();
  const onClick = () =>
    dispatch(someAction())
      .then(() => console.log('success!'))
      .catch(() => console.log('fail!'));

  return (
    <div>
      <button onClick={onClick}>
        Click to trigger a Redux action asynchronously
      </button>
    </div>
  );
};

export default Sample;
```
