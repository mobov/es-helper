import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
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
  ],
}

if (process.env.TYPE !== 'umd') {
  config.external = Object.keys(packages.dependencies)
}

export default config
