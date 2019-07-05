const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ora = require('ora')
const {
    copySync
} = require('fs-extra')

exports.command = ['create', 'cr']
exports.description = '创建新组件'

exports.builder = (yargs) => {
    return yargs
        .option('name', {
            alias: ['n'],
            describe: '组件名称',
            default: 'demo'
        })
        .option('cwd', {
            alias: ['c'],
            describe: '组件根路径',
            default: 'cwd'
        })
}

exports.handler = async (argv) => {
    // console.log(argv)
    let {
        name,
        cwd
    } = argv
    let selObj = {
        name: {
            name: 'name',
            type: 'input',
            message: '请输入组件名称(/^[a-zA-Z]{1,}\d{0,}/)',
            default: name,
            validate: (val) => {
                if (fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components', val))) {
                    return '组件名已存在，请重新输入'
                }
                if (/^[a-zA-Z]{1,}\d{0,}/.test(val)) {
                    return true
                }
                return '请输入正确的组件名'
            }
        },
        cwd: {
            name: 'cwd',
            type: 'input',
            message: '请输入组件根路径(cwd代表当前路径,相对于当前路径)',
            default: cwd,
            validate: (cwd) => {
                if (fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components'))) {
                    return true
                }
                return '请输入正确的路径'
            },
        }
    } 
    let selArr = []
    // console.log(888)
    if (!fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components'))) {
        selArr.push(selObj.cwd)
    }
    // console.log(fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components', name)))
    if (fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components', name))) {
        selArr.push(selObj.name)
    }
    let answers = {}
    if (selArr.length) {
        answers = await inquirer.prompt(selArr)
    }
    name = answers.name || name
    cwd = answers.cwd || cwd
    cwd = path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components')
    
    copySync(path.resolve(__dirname, '../template'), path.resolve(cwd, name))

}