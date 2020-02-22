import { assign } from 'xstate';

export const setError = assign({ error: (_, { data: error }) => error });
