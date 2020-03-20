const format = ({ exported: { name } }) => `** ${name}`;

const iterate = (stack, { specifiers }) => stack.concat(specifiers.map(format));

const print = content => content.reduce(iterate, []).join('\n');

export default exports => `
  @startwbs
  * Exports
  ${print(exports)}
  @endwbs
`;