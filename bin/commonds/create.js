const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ora = require('ora')
const glob = require('glob')
const ejs = require('ejs')
const {
    exec
} = require('shelljs')

const writeFile = require('../utils/writeFile')

exports.command = ['create', 'cr']
exports.description = '创建新组件'

exports.builder = (yargs) => {
    return yargs
        .option('name', {
            alias: ['n'],
            describe: '组件名称'
        })
        .option('cwd', {
            alias: ['c'],
            describe: '组件根路径',
            default: 'cwd'
        })
        .option('type', {
            alias: ['t'],
            describe: '组件类型',
            choices: ['component', 'directive', 'plugin']
        })
        .option('startServer', {
            alias: ['dev'],
            describe: '是否开启服务',
            default: false,
            boolean: true
        })
}

exports.handler = async (argv) => {
    let {
        name,
        cwd,
        type,
        dev
    } = argv
    let selObj = {
        name: {
            name: 'name',
            type: 'input',
            message: '请输入组件名称(/^[a-zA-Z]{1,}\d{0,}/)',
            default: name || 'demo',
            validate: (val) => {
                val = val.replace(/([A-Z])/g, ($0, $1) => {
                    return (val.indexOf($1) ? '-' : '') + $1.toLowerCase()
                })
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
        },
        type: {
            name: 'type',
            type: 'list',
            message: '请选择组件类型',
            default: 'component',
            choices: [
                {
                    name: '插件',
                    value: 'plugin'
                },
                {
                    name: '指令',
                    value: 'directive'
                },
                {
                    name: '组件',
                    value: 'component'
                }
            ]
        },
        dev: {
            name: 'dev',
            type: 'confirm',
            message: '是否开启服务',
            default: true
        },
        port: {
            name: 'port',
            type: 'input',
            message: '请输入组件服务端口号',
            default: 3001,
            when: (answers) => {
                return answers.dev
            }
        },
        report: {
            name: 'report',
            type: 'input',
            message: '请输入组件liivereload服务端口号',
            default: 3002,
            when: (answers) => {
                return answers.dev
            }
        }
    } 
    let answers = {}
    let selArr = []
    name = (name || '').replace(/([A-Z])/g, ($0, $1) => {
        return (name.indexOf($1) ? '-' : '') + $1.toLowerCase()
    })
    if (!fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components'))) {
        selArr.push(selObj.cwd)
    }
    // console.log(fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components', name)))
    if (!name || fs.existsSync(path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components', name))) {
        selArr.push(selObj.name)
    }
    if (!type) {
        selArr.push(selObj.type)
    }

    if (!dev) {
        selArr.push(selObj.dev)
    }
    selArr.push(selObj.port)
    selArr.push(selObj.report)

    if (selArr.length) {
        answers = await inquirer.prompt(selArr)
    }
    
    name = (answers.name || name || '').replace(/([A-Z])/g, ($0, $1) => {
        return ((answers.name || name || '').indexOf($1) ? '-' : '') + $1.toLowerCase()
    })
    
    type = answers.type || type
    cwd = answers.cwd || cwd
    cwd = path.resolve(process.cwd(), cwd === 'cwd' ? './' : cwd, './src/components')
    let comName = name
    let upperName = (comName || '').replace(/(^[a-z])/, ($0) => $0.toUpperCase()).replace(/((-)([a-z]))/, ($0, $1, $2, $3) => {
        return $3.toUpperCase()
    })

    let comType = type === 'plugin' ? '插件' : type === 'component' ? '组件' : '指令'
    
    let spiner = ora(comType + '模版构建中').start()
    setTimeout(async () => {
        // 拷贝模版文件
        let temp = path.resolve(__dirname, '../template')
        let files = glob.sync('**/*.*(js|less|vue)', { cwd: temp })

        await Promise.all(files.map(async pathname => {
            await writeFile(path.resolve(temp, pathname), path.resolve(cwd, name, pathname), (data) => {
                return ejs.render(data, {
                    name: comName,
                    upperName,
                    type
                })
            })
        }))
        let indexPath = path.resolve(__dirname, '../../src/index.js')
        let data = fs.readFileSync(indexPath, 'utf-8')

        if (data.indexOf(upperName) === -1) {
            data = data.replace(/(\s{0,}\nconst\s{1,}plugins)/, ($0) => {
                return `\nexport { default as ${upperName} } from './components/${comName}'` + $0
            })
    
            data = data.replace(/((\s{0,}\nconst\s{1,}plugins\s{1,}\=\s{1,}\[\s{0,}\n)([\n\s\S]{0,})([a-zA-Z0-9\,\s\n]{0,})(\]))/, ($0, $1, $2, $3, $4, $5) => {
                return $2 +  $3.replace(/(\s{0,}\n$)/, ',') + `\n    ${upperName}\n` + $5
            })
           
            data = Buffer.from(data, 'utf-8')
    
            fs.writeFileSync(indexPath, data)
        }

        spiner.succeed(comType + '构建成功')
        if (answers.dev || dev) {
            console.log('开启服务')
            exec(`zf-ui start -n ${name} -p ${answers.port} -r ${answers.report}`)
        }
    }, 500)
}
