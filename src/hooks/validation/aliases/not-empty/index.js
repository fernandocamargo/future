import { useYup } from 'hooks';

export default () => {
  const { mixed } = useYup();

  return mixed().nullable(false, 'LOL');
};
