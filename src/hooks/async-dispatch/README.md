# useAsyncDispatch

This hook returns a reference to the `dispatch` function from the `Redux` store. You may use it to dispatch `actions` as needed.

## Usage

```javascript
import React, { useCallback } from 'react';

import { useAsyncDispatch } from 'hooks';
import someAction from 'actions/some/action';

const Sample = () => {
  const dispatch = useAsyncDispatch();
  const onClick = useCallback(() => {
    dispatch(someAction())
      .then(() => console.log('success!'))
      .catch(() => console.log('fail!'));
  }, [dispatch]);

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
