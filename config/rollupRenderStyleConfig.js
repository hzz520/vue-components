const postcss = require('rollup-plugin-postcss')
const clear = require('rollup-plugin-clear')
// const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const basePlugin = require('./rollupBasePluginConfig')

const createStyleConfig = (moduleName, external, dest) => ({
  input: `src/components/${moduleName}/index.js`,
  output: {
    file: `garbage-${dest}/${moduleName}.js`,
    format: dest === 'es' ? 'es' : 'cjs',
  },
  plugins: [
    clear({
      targets: [`${dest}`]
    }),
    // css 处理，暂时没有加插件
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
        }), 
        cssnano
      ],
      minimize: true,
      // 样式输出到 createModuleConfig 创建的模块文件夹下
      extract: `${dest}/${moduleName}/style/index.css` 
    }),

    ...basePlugin
  ],
  external: id => external.some(e => id.indexOf(e) === 0),
})

module.exports = createStyleConfig