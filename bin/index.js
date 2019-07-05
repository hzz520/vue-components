#! /usr/bin/env node

const yargs = require('yargs')

yargs
    .version()
    .alias('version', 'v')
    .commandDir('commonds')
    .demandCommand(1, '至少输入一个子命令')
    .help('h')
    .alias('help', 'h')
    .showHelpOnFail(true)
    .argv
