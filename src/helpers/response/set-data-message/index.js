import update from 'immutability-helper';

export default ({ response, message }) =>
  update(response, { response: { $set: { data: { message } } } });
