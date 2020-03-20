import { createWriteStream, readFileSync } from 'fs';
import find from 'fast-glob';
import { parse } from '@babel/parser';
import plantuml from 'node-plantuml';

const PARSER_OPTIONS = { sourceType: 'module', plugins: ['jsx'] };

export default find('./scripts/**/*.uml')
  .then(files =>
    Promise.all(
      files.map(source => {
        const content = readFileSync(source).toString();
        const uml = plantuml.generate(content);
        const target = source.replace(/.uml$/, '.png');

        return uml.out.pipe(createWriteStream(target));
      })
    )
  )
  .catch(({ message }) => console.log('nope();', { message }));
