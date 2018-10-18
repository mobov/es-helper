import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

import packages from '../package.json'

const config = {
  input: 'src/index.js',
  output: {
    file: `lib/index.${process.env.TYPE}.js`,
    format: process.env.TYPE,
    name: 'Est',
  },
  plugins: [
    eslint(),
    babel({
      runtimeHelpers: true,
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    // serve('example'),
    // livereload(),
  ],
}

if (process.env.TYPE === 'cjs') {
  config.external = Object.keys(packages.dependencies)
}

export default config
