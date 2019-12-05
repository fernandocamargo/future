import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import * as Profile from 'services/profile';

import { FETCH } from './constants';
import { fetchSucceed, fetchFail } from '.';

export default action$ =>
  action$.pipe(
    ofType(FETCH),
    mergeMap(credentials =>
      from(Profile.authenticate(credentials)).pipe(
        map(details => fetchSucceed({ details })),
        catchError(({ message: error }) => of(fetchFail({ error })))
      )
    )
  );
