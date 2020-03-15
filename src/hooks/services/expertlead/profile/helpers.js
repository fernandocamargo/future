import property from 'lodash/property';

export const formatProfile = ({
  data: { isRemoteOnly = false, ...profile },
}) => ({
  ...profile,
  isRemoteOnly,
});

export const formatFocusRoleList = property('data.data');
