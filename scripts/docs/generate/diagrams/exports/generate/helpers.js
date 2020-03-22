import startsWith from 'lodash/startsWith';
import { join, parse } from 'path';
import { existsSync } from 'fs';

import { dependencies } from '../../../../../../package.json';

export const packages = Object.keys(dependencies);

export const isLocal = ({ path, src }) =>
  [join(path.dir, src), join('src', src)].find(existsSync);

export const isExternal = ({ src }) =>
  packages.reduce(
    (stack, pckg) => (!!stack ? stack : startsWith(src, pckg) && src),
    ''
  );

export const getIdFrom = ({ start, end }) => [start, end].join('x');

export const getWildcardFrom = ({ start, end }) => ({
  local: { name: '*' },
  exported: { name: '*' },
  start,
  end,
});

export const format = name =>
  ({ '*': '*', default: 'default export' }[name] || `{ ${name} }`);

export const print = ({ path, report }) => {
  const { imported, exported } = report.reduce(
    (_, occurrence) => {
      const {
        source: { value: src },
        specifiers = [getWildcardFrom(occurrence)],
      } = occurrence;

      return specifiers.reduce((stack, specifier) => {
        const { local, exported } = specifier;
        const id = getIdFrom(specifier);
        const ids = {
          imported: `${id}.imported`,
          exported: `${id}.exported`,
        };
        const paths = {
          imported: isLocal({ path, src }) || isExternal({ src }),
          exported: path.dir,
        };
        const valid = !!paths.imported && !!paths.exported;

        return !valid
          ? stack
          : {
              imported: [
                `
                  object "${paths.imported}" as ${ids.imported}
                  ${ids.imported} : ${format(local.name)}
                `,
              ].concat(stack.imported),
              exported: [
                `
                  object "${paths.exported}" as ${ids.exported}
                  ${ids.exported} : ${format(exported.name)}
                  ${ids.imported} ..> ${ids.exported}
                `,
              ].concat(stack.exported),
            };
      }, _);
    },
    { imported: [], exported: [] }
  );

  return { imported: imported.join('\n'), exported: exported.join('\n') };
};