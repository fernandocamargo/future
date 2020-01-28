import { useYup } from 'hooks';

export default ({ name }) => () => {
  const { ref, string } = useYup();

  return string().oneOf([ref(name), null]);
};
