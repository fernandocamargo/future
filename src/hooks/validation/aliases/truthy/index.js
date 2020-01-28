import { useYup } from 'hooks';

export default () => {
  const { boolean } = useYup();

  return boolean().oneOf([true]);
};
