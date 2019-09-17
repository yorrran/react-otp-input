import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import react from 'react';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    exports: 'named',
    sourcemap: true,
    name: 'foo',
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': Object.keys(react),
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    scss(),
  ],
};
