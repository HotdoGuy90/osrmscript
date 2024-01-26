#! /usr/bin/env node
const { program } = require('commander');
const osrmscript = require('../osrmscript');
const fs = require('fs');

program
    .command('run')
    .description('Runs the file in the argument.')
    .option('-f', '--file <filename>', 'The file you want to run')
    .option('-o', '--output <filename>', 'The name of the file you want the cli to output (if left blank prints the output instead)')
    .action(run)

program.parse(process.argv);

function run() {
    if (process.argv[3] == '-f' || process.argv[3] == '--file') {
        var code = osrmscript.translateFileToJavascript(process.argv[4]);
        if (process.argv[5] == '-o' || process.argv[5] == 'output') {
            fs.writeFile(process.argv[6], code, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File created successfully.");
                }
            });
        } else {
            eval(code);
        }
    } else {
        throw new Error("You must have a -f flag.");
    }
}
