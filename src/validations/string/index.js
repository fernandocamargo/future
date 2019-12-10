import { string } from 'yup';

export const required = () => string().required('This field is required');

export const minLength = amount => string().min(amount);

export const maxLength = amount => string().max(amount);
