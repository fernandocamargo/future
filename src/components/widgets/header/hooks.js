export const useHeader = () => {
  const { logged, profile } = useAuthentication();

  return logged ? Restricted : Public;
};
