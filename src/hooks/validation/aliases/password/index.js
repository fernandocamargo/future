import { useYup } from 'hooks';

export default () => {
  const { string } = useYup();

  return string()
    .min(6)
    .max(50)
    .matches(/[a-zA-Z0-9]/);
};
