import filter from 'lodash/filter';
import { join, normalize, parse, resolve } from 'path';
import { createWriteStream, mkdirSync, readFileSync } from 'fs';
import find from 'fast-glob';
import { parse as interpret } from '@babel/parser';
import { generate as draw } from 'node-plantuml';

import * as diagrams from './diagrams';

const MODE = { sourceType: 'module', plugins: ['jsx'] };

class Queue {
  constructor() {
    this.items = [];
  }

  generate = ({ file, tree }) => ([name, { check, generate }]) => {
    const path = parse(file);
    const report = check(tree);
    const dir = resolve('docs', `${path.dir}/docs`);
    const destination = join(dir, `${name}.png`);

    mkdirSync(dir, { recursive: true });

    return (
      !!report &&
      new Promise(callback =>
        draw(generate({ path, report }), callback).out.pipe(
          createWriteStream(destination)
        )
      )
    );
  };

  scan = item => {
    const { generate } = this;
    const file = normalize(item);
    const source = readFileSync(file).toString();
    const tree = interpret(source, MODE);
    const promises = Object.entries(diagrams).map(generate({ file, tree }));

    return Promise.all(promises);
  };

  organize = items => {
    const { scan } = this;
    const [first] = items;

    this.items = items;

    return scan(first);
  };
}

const { organize } = new Queue();

export default find('./src/components/**/index.js')
  .then(organize)
  .then(() => console.log('success();'))
  .catch(console.warn);
