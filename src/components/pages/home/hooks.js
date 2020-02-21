import { useAuthentication, useRoutes } from 'hooks';

export const useHome = () => {
  const { logged } = useAuthentication();
  const { dashboard, login } = useRoutes();

  return logged ? dashboard : login;
};
