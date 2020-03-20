import filter from 'lodash/filter';
import { normalize, parse } from 'path';
import { createWriteStream, readFileSync } from 'fs';
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
    const { base, dir } = parse(file);
    const report = check(tree);

    return (
      !!report &&
      draw(generate(report)).out.pipe(createWriteStream('./lol.png'))
    );
  };

  scan = item => {
    const { generate } = this;
    const file = normalize(item);
    const source = readFileSync(file).toString();
    const tree = interpret(source, MODE);

    return Object.entries(diagrams).forEach(generate({ file, tree }));
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
  .catch(console.warn);