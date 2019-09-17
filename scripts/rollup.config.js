import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import react from 'react';
import nodeResolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/src/index.js',
    format: 'cjs',
    exports: 'named',
    name: 'codeInput',
  },
  external: ['react', 'react-dom', { includeDependencies: true }],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      objectHashIgnoreUnknownHack: true,
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': Object.keys(react),
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    babel({
      external: 'node_modules/**',
    }),
    scss(),
    nodeResolve({
      modulesOnly: true,
    }),
    peerDepsExternal(),
  ],
};
