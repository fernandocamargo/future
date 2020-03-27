import property from 'lodash/property';

export const normalize = ({ bucket, name }) =>
  !!bucket && !!name
    ? `https://s3.eu-central-1.amazonaws.com/${bucket}/${name}`
    : '';

export const formatProfile = ({
  data: { isRemoteOnly = false, photo, ...profile },
}) => ({ photo: normalize(photo), isRemoteOnly, ...profile });

export const formatFocusRoleList = property('data.data');
