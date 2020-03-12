import Error from 'error';

export const fail = ({
  response: {
    data: { error },
  },
}) => {
  throw new Error(error);
};

export const format = ({ data }) => Promise.resolve(data);
