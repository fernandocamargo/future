import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { name } from 'pckg';
import * as reducers from 'actions/reducers';

const compose = composeWithDevTools({ name });

const persistency = persistReducer(
  { whitelist: ['profile', 'settings'], key: name, storage },
  combineReducers(reducers)
);

export const store = createStore(persistency, compose());

export const persistor = persistStore(store);

export default store;
