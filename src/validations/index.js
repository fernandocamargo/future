import { boolean, ref, string } from 'yup';

export const fullName = () =>
  string()
    .trim()
    .min(3)
    .max(50);

export const email = () =>
  string()
    .trim()
    .email();

export const password = () =>
  string()
    .min(6)
    .max(50)
    .matches(/[a-zA-Z0-9]/);

export const passwordConfirmation = ({ name }) =>
  string().oneOf([ref(name), null]);

export const truthy = () => boolean().oneOf([true]);
