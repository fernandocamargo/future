const useEntries = (stack, [key, useValue]) =>
  Object.assign(stack, { [key]: useValue() });

export default object => Object.entries(object).reduce(useEntries, {});
