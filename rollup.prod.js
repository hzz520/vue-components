const babel = require('rollup-plugin-babel')
const Resolve = require('rollup-plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const commonjs = require('rollup-plugin-commonjs')
const clear = require('rollup-plugin-clear')
const { resolve } = require('path')
const replace = require('rollup-plugin-replace')
const pkg = require('./package.json')
const vuePlugin = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const { terser } = require('rollup-plugin-terser')

const external = Object.keys(pkg.peerDependencies)

const env = process.env.NODE_ENV

export default {
  input: resolve(__dirname, `./src/index.js`),
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  plugins: [
    clear({
      targets: ['dist']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    terser({
        output: {
          beautify: false
        }
    }),
    vuePlugin({
        compileTemplate: true,
        htmlMinifier: {
            customAttrSurround: [[/@/, new RegExp('')], [/:/, new RegExp('')]],
            collapseWhitespace: true,
            removeComments: true
        },
        css: false
    }),
    Resolve({
      extensions: ['.vue', '.js', 'json', 'less', '.css']
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: 'node_modules/process/**'
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    // css(),
    postcss({
      include: resolve(__dirname, './src/**'),
      extensions: ['.less', '.css'],
      plugins: [autoprefixer, cssnano],
      extract: 'dist/index.css'
    })
  ],
  external: external,
}
