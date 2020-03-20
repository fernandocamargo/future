import filter from 'lodash/filter';

export default ({ program: { body: tree } }) => {
  const exports = filter(tree, { type: 'ExportNamedDeclaration' });

  return !!exports.length && exports;
};