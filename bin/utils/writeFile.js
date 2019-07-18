const fs = require('fs-extra')
const path = require('path')

module.exports = async (filePath, outPath, transform) => {
    // await mkdir(dirname(filePath), root)
    // let temp = path.resolve(root, filePath)
    // await fs.ensureFileSync(temp)
    let data = fs.readFileSync(filePath, 'utf-8')
    if (transform && typeof transform === 'function') {
        data = transform(data) || data
    }
    await fs.outputFileSync(outPath, data)
}
