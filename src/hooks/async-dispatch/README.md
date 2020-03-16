# useAsyncDispatch

## Usage

```javascript
import { useAsyncDispatch } from 'hooks';
import someAction from 'actions/some/action';

const Sample = () => {
  const dispatch = useAsyncDispatch();
  const onClick = useCallback(() => {
    dispatch(someAction());
  }, [dispatch]);

  return (
    <div>
      <button onClick={onClick}>Click to trigger a Redux action</button>
    </div>
  );
};
```
