# useAuthentication

This hook returns...

## Return

| Property   | Type       | Description |
| ---------- | ---------- | ----------- |
| `identify` | `Function` |             |
| `logged`   | `Boolean`  |             |
| `profile`  | `Profile`  |             |
| `logout`   | `Function` |             |

## Usage

```javascript
import React, { useCallback } from 'react';

import { useAuthentication } from 'hooks';

const Sample = () => {
  const { identify, logged, profile, logout } = useAuthentication();
  const login = useCallback(() => identify(), [identify]);

  return (
    <div>
      <dl>
        <dt>Are you logged?</dt>
        <dd>{logged ? 'Yes' : 'No'}.</dd>
      </dl>
      <button onClick={login}>Click to log in</button>
      <button onClick={logout}>Click to log out</button>
      {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
    </div>
  );
};

export default Sample;
```
