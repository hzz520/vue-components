const rollup = require('rollup')
const config = require('./rollup.config')

let watcher = rollup.watch(config)

// watcher.on('event', event => {
//    console.log(event)
// // event.code 会是下面其中一个：
// //   START        — 监听器正在启动（重启）
// //   BUNDLE_START — 构建单个文件束
// //   BUNDLE_END   — 完成文件束构建
// //   END          — 完成所有文件束构建
// //   ERROR        — 构建时遇到错误
// //   FATAL        — 遇到无可修复的错误
// })