import fs from 'fs';
import path from 'path';
const pkg = require('./../package.json');
import { rollup } from 'rollup';

delete pkg.scripts;

fs.writeFileSync(
  path.join(__dirname, './../dist/package.json'),
  JSON.stringify(pkg, null, 2)
);
