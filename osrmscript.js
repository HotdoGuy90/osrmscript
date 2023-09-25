var fs = require('fs')

// osrmscript.js
function translateToJavaScript(osrmscriptCode) {
    // Replace "say: " with "console.log("
    osrmscriptCode = osrmscriptCode.replace(/say:\s*"([^"]*)"/g, 'console.log("$1");');

    // Replace "ask: " with "require('prompt-sync')()"
    osrmscriptCode = osrmscriptCode.replace(/ask:\s*"([^"]*)"/g, 'require("prompt-sync")()("$1")');
    
    // Replace "datatype variable = data;" with "let variable = data;"
    osrmscriptCode = osrmscriptCode.replace(/(\w+)\s+(\w+)\s*=\s*(.*?);/g, 'let $2 = $3;');

    // Replace concatenation with JavaScript-style string concatenation using "+"
    osrmscriptCode = osrmscriptCode.replace(/"([^"]+)"\s*\+\s*"([^"]+)"/g, '"$1" + "$2"');

    // Replace variable + string concatenation with JavaScript-style string concatenation using "+"
    osrmscriptCode = osrmscriptCode.replace(/(\w+)\s*\+\s*"([^"]+)"/g, '$1 + "$2"');
    osrmscriptCode = osrmscriptCode.replace(/"([^"]+)"\s*\+\s*(\w+)/g, '"$1" + $2');

    // Replace "say: ~var~;" with "console.log(var);"
    osrmscriptCode = osrmscriptCode.replace(/say:\s*~([^~]+)~/g, 'console.log($1);');
  
    // Replace variable placeholders (between ~ signs) with their corresponding values
    osrmscriptCode = osrmscriptCode.replace(/~([^~]+)~/g, function(match, variableName) {
        return variableName; // Replace ~variableName~ with variableName
    });

    osrmscriptCode = osrmscriptCode.replace(/TRUE/g, 'true');
    osrmscriptCode = osrmscriptCode.replace(/FALSE/g, 'false');
    osrmscriptCode = osrmscriptCode.replace(/NOTHING/g, 'null');

    // Replace typecasting assignment "int: ~var~" with "let var = Number(var)"
    osrmscriptCode = osrmscriptCode.replace(/int:\s*(\w+)\s*=\s*~([^~]+)~/g, 'let $1 = Number($2)');
    
    // Add semicolon at the end if missing
    return osrmscriptCode.endsWith(';') ? osrmscriptCode : osrmscriptCode + ';';
}

function runOsrmscript(osrmscriptCode) {
    const javascriptCode = translateToJavaScript(osrmscriptCode);
    eval(javascriptCode); // Execute the JavaScript code
}

function translateFileToJavascript(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return translateToJavaScript(String(file));
}

module.exports = {
    runOsrmscript,
    translateToJavaScript,
    translateFileToJavascript
};
