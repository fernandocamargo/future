import { useYup } from 'hooks';

export default () => {
  const { string } = useYup();

  return string()
    .trim()
    .email();
};
