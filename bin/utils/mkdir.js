const fs = require('fs-extra')
const path = require('path')

module.exports = async (dir, root) => {
    let pathArr = dir.split(path.sep)
    pathArr.reduce((tPath, curPath) => {
        let newPath = path.resolve(tPath, curPath)
        fs.ensureDirSync(newPath)
        return newPath
    }, root)
}
