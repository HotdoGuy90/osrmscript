var osrmscript = require('osrmscript');

var code = osrmscript.translateFileToJavascript('./test.osrm');
eval(code);
