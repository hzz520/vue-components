const {
    exec
} = require('shelljs')
const rimraf = require('rimraf')
const ora = require('ora')

exports.command = ['build', 'bd']
exports.description = '产品打包'

exports.builder = (yargs) => {
    return yargs
}

exports.handler = async (argv) => {
    let binStr = 'npm-run-all --parallel build:es build:cjs build:dist'
    let spiner = ora('开始打包').start()
    console.log('\n' + binStr)
    await exec(binStr)
    
    rimraf.sync('./garbage-es')
    rimraf.sync('./garbage-lib')
    spiner.succeed('打包成功')
}
