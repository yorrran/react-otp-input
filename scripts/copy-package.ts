import fs from 'fs';
import path from 'path';
const pkg = require('./../package.json');

delete pkg.scripts;

fs.writeFileSync(
  path.join(__dirname, './../dist/package.json'),
  JSON.stringify(pkg, null, 2)
)