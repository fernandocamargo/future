export const format = ([roles, details]) => {
  const { focusCategory } = details;
  const {
    [focusCategory]: { list: focusRoleList },
  } = roles;

  return { ...details, focusRoleList };
};
