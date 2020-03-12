export const decode = char => {
  const code = char.charCodeAt(0).toString(16);
  const fragment = `00${code}`.slice(-2);

  return `%${fragment}`;
};
