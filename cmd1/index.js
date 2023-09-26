#! /usr/bin/env node
const { program } = require('commander');
const osrmscript = require('osrmscript');

program
    .command('run')
    .description('Runs the file in the argument.')
    .option('-f', '--file <filename>', 'The name of the file')
    .action(run)

program.parse(process.argv);

function run() {
    const options = program.opts();
    if (options.file) {
        eval(osrmscript.translateFileToJavascript(options.file))
    }
}
