const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const {
    exec
} = require('shelljs')

const dirNames = fs.readdirSync(path.resolve(__dirname, '../../src/components')).filter(filename => !['style'].includes(filename))
const pushObj = (argv, Obj) => {
    let arr = []
    Object.keys(Obj).map(key => {
        if (!argv[key]) {
            arr.push(Obj[key])
        }
    })
    return arr
}

exports.command = ['devServer', 'dev', 'start']
exports.description = '开启服务'

exports.builder = (yargs) => {
    return yargs
       .option('name', {
           alias: ['n'],
           decrible: '组件名称',
           choices: dirNames
       })
       .option('port', {
            alias: ['p'],
            decrible: '端口号'
       })
       .option('report', {
            alias: ['r'],
            decrible: 'livereload 端口号'
       })
}

exports.handler = async (argv) => {
    let selObj = {
        name: {
            name: 'name',
            type: 'list',
            message: '请选择组件',
            choices: dirNames
        },
        port: {
            name: 'port',
            type: 'input',
            message: '请设置端口号',
            default: 3001
        },
        report: {
            name: 'report',
            type: 'input',
            message: '请设置livereload 端口号',
            default: 3002
        }
    }
    let answers = {}
    let selArr = pushObj(argv, selObj)

    if (selArr.length) {
        answers = await inquirer.prompt(selArr)
    }
    
    let name = argv.name || answers.name
    let port = argv.port || answers.port
    let report = argv.report || answers.report

    let binStr = `cross-env NODE_ENV=development rollup -c ./rollup.config.js -w -n ${name} -p ${port} -r ${report}`

    console.log(binStr)
    exec(binStr)
}
