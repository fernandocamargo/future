import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { name } from 'pckg';
import * as reducers from 'actions/reducers';
import * as epicsMap from 'actions/epics';

const epics = combineEpics(...Object.values(epicsMap));

const middleware = createEpicMiddleware();

const compose = composeWithDevTools({ name });

const store = createStore(
  persistReducer(
    { whitelist: ['settings'], key: name, storage },
    combineReducers(reducers)
  ),
  compose(applyMiddleware(middleware))
);

middleware.run(epics);

export const persistor = persistStore(store);

export default store;
