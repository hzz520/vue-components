/*
    rollup 配置文件
*/
const pkg = require('./package.json')
const createModuleConfig = require('./config/rollupRenderModuleConfig')
const createStyleConfig = require('./config/rollupRenderStyleConfig')
const { cModuleMap } = require('./config/obtainComponentsName')

const external = Object.keys(pkg.peerDependencies)
const isDev = process.env.NODE_ENV === 'development'
const dest = process.env.DEST || 'es'

/*
    dev 情况下不做样式抽离
    其他环境下，除了基本的 js 打包外，遍历要拆分的模块，分别生成一个配置项，在这个配置项中处理各自的样式分离
*/
const rollupConfig = 
  [
    createModuleConfig(cModuleMap, external, isDev, dest)
  ]
  .concat(
    Object.keys(cModuleMap).map(moduleName => createStyleConfig(moduleName, external, dest))
  )

module.exports = rollupConfig