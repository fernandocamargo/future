export const measure = label => {
  const { length } = label;
  const ratio = (20 - length) / 100 + 1;

  return length * ratio * 8.5;
};
