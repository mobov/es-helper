import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify }  from 'rollup-plugin-uglify'
import { eslint } from 'rollup-plugin-eslint'
import packages from '../package.json'

// const output = (() => {
//   if (process.env.TYPE === 'es') {
//     const file = require()
//   } else {
// 	  return {
// 		  file: `lib/index.${process.env.TYPE}.js`,
// 		  format: process.env.TYPE,
// 		  name: 'EsHelper',
// 	  }
//   }
// })()

const config = {
  input: 'lib/index.js',
  output: {
	  file: `lib/index.${process.env.TYPE}.js`,
	  format: process.env.TYPE,
	  name: 'EsHelper',
  },
  plugins: [
    // eslint(),
    babel({
      runtimeHelpers: true,
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
	  process.env.TYPE === 'umd' ? uglify() : null
  ],
}

  if (process.env.TYPE !== 'umd') {
    config.external = Object.keys(packages.dependencies)
  }

export default config
