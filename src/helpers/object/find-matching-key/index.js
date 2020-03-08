import findKey from 'lodash/findKey';
import identity from 'lodash/identity';

export default object => findKey(object, identity);
