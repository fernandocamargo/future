export const format = ([profile, roles]) => {
  const { focusCategory } = profile;
  const {
    [focusCategory]: { list: focusRoleList },
  } = roles;

  return { ...profile, focusRoleList };
};
