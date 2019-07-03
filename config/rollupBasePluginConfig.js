const babel = require('rollup-plugin-babel')
const Resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const vuePlugin = require('rollup-plugin-vue')
const dest = process.env.DEST || 'es'

module.exports = [
    Resolve({
      extensions: ['.vue', '.js', '.json', '.less', '.css']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    vuePlugin({
      compileTemplate: true,
      defaultLang: {
        style: 'less'
      },
      css: false
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
]