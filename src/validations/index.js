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

export const password = () => string().trim();

export const passwordConfirmation = ({ name }) =>
  string()
    .trim()
    .oneOf([ref(name)]);

export const truthy = () => boolean().oneOf([true]);
