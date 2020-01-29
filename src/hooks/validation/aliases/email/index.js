import { useYup } from 'hooks';

export default () => {
  const { string } = useYup();

  return string()
    .trim()
    .min(3)
    .max(255)
    .email();
};
