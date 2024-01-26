# API Usage

Yes, there is now an api. You can access it from the url: 
```
https://runkit.io/hotdoguy90/osrmscript-api/1.1.0/?code=YOUROSRMSCRIPTCODEHERE
```

Just replace YOUROSRMSCRIPTCODEHERE with your osrmscript code.

NOTE: make sure to remove alphanumeric characters from the url and replace them with their URI characters. (usually a percentage followed by the last 2 digits of the character's unicode)

## Examples

### The Command Line

```bash
curl -L "https://runkit.io/hotdoguy90/osrmscript-api/1.1.0/?code=say%3A%20%22Hello%20World%21%22" && echo ""
#outputs: console.log("Hello World!")
```

### Javascript (Vanilla)

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Osrmscript</title>
</head>
<body>
    <p>So, I was just relaxing one day. When suddenly, I noticed that there was an API maker called <a href="https://runkit.com">runkit</a> that was completely free, easy to use, and supported any node js package that was on the very site of npmjs. (not sponsored by them I just think theyre really cool) So I made one, and after some (a lot of) trial and error, I have managed to make one. This is the example (nothing fancy).</p>
    <label for="coder">Input code: </label>
    <input id="coder">
    <button onclick="main()">Enter</button>
    <br>
    <label for="output">Output: </label>
    <pre id="output"></pre>
    <script src="./main.js"></script>
</body>
</html>
```

Javascript:

```javascript
function main() {
    var input = document.getElementById("coder");
    var output = document.getElementById("output");
    var apiName = 'https://runkit.io/hotdoguy90/osrmscript-api/1.1.0/?code=' + encodeURIComponent(input.value);
    fetch(apiName)
        .then(response => response.text())
        .then(jsCode => output.innerHTML = jsCode);
}
```

CSS:

```css
#output {
    background-color: lightyellow;
    width: 600px;
    height: 600px;
}
```

NOTE: The code will not work unless you host it on a server and get an extension that allows the cors policy. The extension is [here](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf). (Click [here](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/) for Firefox.)

### Python

```python
import itertools
import urllib.request
import urllib.parse

def translateToJavascript(usr_input):
  apiname = "https://runkit.io/hotdoguy90/osrmscript-api/1.1.0/?code=" + urllib.parse.quote(usr_input)
  output = urllib.request.urlopen(apiname)
  jsCode = output.read().decode()
  return jsCode

def writeToFile(code):
  with open("script.js", "a") as file:
    file.writelines(code)

for i in itertools.count():
  try:
    osrmscript_code = input("In[%d]: " % i)
    if osrmscript_code == 'exit()' or osrmscript_code == 'exit();':
      print("Exiting...")
      break
    jsCode = translateToJavascript(osrmscript_code)
    print(jsCode)
    writeToFile(jsCode + '\n')
  except KeyboardInterrupt:
    pass
  except EOFError:
    break
```

By the way, the api maker i used to make it is [here](https://runkit.com), and the source code for the api is [here](https://runkit.com/hotdoguy90/osrmscript-api/1.1.0)
