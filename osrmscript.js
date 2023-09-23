// osrmscript.js
function translateToJavaScript(osrmscriptCode) {
    // Replace "say: " with "console.log("
    const jsCode = osrmscriptCode.replace(/say:\s*"([^"]*)"/g, 'console.log("$1");');
    
    // Add semicolon at the end if missing
    return jsCode.endsWith(';') ? jsCode : jsCode + ';';
}

function runOsrmscript(osrmscriptCode) {
    const javascriptCode = translateToJavaScript(osrmscriptCode);
    eval(javascriptCode); // Execute the JavaScript code
}
  
module.exports = {
    runOsrmscript,
    translateToJavaScript
};
