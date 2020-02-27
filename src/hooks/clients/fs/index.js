const getContent = ({ default: content }) => Promise.resolve(content);

const client = {
  load(promise) {
    return promise.then(getContent);
  },
};

export default () => client;
