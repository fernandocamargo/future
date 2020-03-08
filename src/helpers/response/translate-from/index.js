import Error from 'error';

export default ({ errors }) => ({
  response: {
    data: { message: code },
  },
}) => {
  throw new Error({ message: errors[code], code });
};
