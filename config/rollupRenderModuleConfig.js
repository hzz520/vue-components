/*
    rollup 配置文件
*/
const postcss = require('rollup-plugin-postcss')
// const eslint = require('rollup-plugin-eslint')
const clear = require('rollup-plugin-clear')
const basePlugin = require('./rollupBasePluginConfig')
// const autoprefixer = require('autoprefixer')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const { terser } = require('rollup-plugin-terser')

const createModuleConfig = (cModuleMap, external, isDev, dest = 'es') => ({
  input: {
    index: './src/index.js',
    ...cModuleMap
  },
  output: {
    dir: dest,
    format: dest === 'es' ? 'es' : 'cjs',
    sourceMap: true,
    entryFileNames: '[name]/index.js',
    exports: 'named',
    chunkFileNames: 'vendor.js',
    optimizeChunks: true
  },
  experimentalCodeSplitting: true,
  plugins: [
    clear({
      targets: [dest]
    }),
    postcss({
      // modules: true, // 增加 css-module 功能
      extensions: ['.less', '.css'],
      use: [
        ['less', {
          javascriptEnabled: true
        }]
      ],
      plugins: [
        cssnext({
          preset: 'advanced'
        }),, 
        cssnano
      ],
      minimize: true,
      // inject: isDev, // dev 环境下的 样式是入住到 js 中的，其他环境不会注入
      extract: `${dest}/index/style/index.css` // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
    }),
    terser({
      output: {
        beautify: false
      }
    }),

    // eslint({
    //   include: ['src/**/*.js']
    // }),

    ...basePlugin
  ],
  // 将模块视为外部模块，不会打包在库中
  external: id => external,
  ...(isDev ? {watch: {
    include: 'src/**',
    clearScreen: true
  }} : {})
})

module.exports = createModuleConfig