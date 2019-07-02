const babel = require('rollup-plugin-babel')
const Resolve = require('rollup-plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const commonjs = require('rollup-plugin-commonjs')
const vuePlugin = require('rollup-plugin-vue')
const clear = require('rollup-plugin-clear')
const { resolve } = require('path')
const html = require('rollup-plugin-bundle-html')
const serve = require('rollup-plugin-serve')
const replace = require('rollup-plugin-replace')
const livereload = require('rollup-plugin-livereload')
const chalk = require('chalk')
const argv = require('yargs-parser')(process.argv.slice(2), { 
  alias: { 
    'name': ['n'],
    'port': ['p'],
    'report': ['r']
  }
  // array: ['watch', 'w']
})

const env = process.env.NODE_ENV
let { 
  name,
  port,
  report
} = argv

if (!name) {
  console.log(chalk.green('please input: ') + chalk.red('npm run dev -- --name|-n [模块名] --port|-p [端口号] --report|-r [livereload 端口号]') + chalk.black(' //moduleName组件文件夹名称'))
  process.exit(1)
}

const config = {
  input: resolve(__dirname, `./src/components/${name}/example/index.js`),
  output: {
    format: 'cjs',
    file: `example/${name}/index.js`
  },
  plugins: [
    clear({
      targets: [`example/${name}`]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    livereload({
      watch: [`example/${name}`,  `src/components/${name}`],
      port: +report || 35729
    }),
    html({
     template: 'src/index.html',
     filename: 'index.html',
     dest: `example/${name}`
    }),
    serve({
      open: true,
      openPage: '',
      contentBase: `example/${name}`,
      host: 'localhost',
      port: port || 8900,
    }),
    vuePlugin({
        compileTemplate: true,
        defaultLang: {
          style: 'less'
        },
        css: false
    }),
    // css(),
    Resolve({
      extensions: ['.vue', '.js', '.json', '.less', '.css']
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: 'node_modules/process/**'
    }),
    babel(),
    postcss({
      include: resolve(__dirname, './src/**'),
      extensions: ['.less', '.css'],
      plugins: [autoprefixer, cssnano],
      extract: true
    //   sourceMap: 'file.map'
    }),
  ],
  watch: {
    chokidar: true,
    include: [`src/components/${name}/**/*`, `src/components/${name}/**/*.less`],
    exclude: 'node_modules/**',
    clearScreen: false
  }
}

module.exports = config
