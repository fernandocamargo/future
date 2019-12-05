import random from 'lodash/random';

export const authenticate = ({ email, password }) =>
  new Promise((resolve, reject) =>
    !!random()
      ? resolve({ name: 'Fernando Camargo', email })
      : reject(new Error(`Not found (wrong password: "${password}")`))
  );
