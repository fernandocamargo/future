import { decode } from 'helpers/jwt';

export const format = ({ data: profile }) => {
  const { accessToken: token } = profile;
  const decoded = decode(token);

  return { ...profile, ...decoded };
};
