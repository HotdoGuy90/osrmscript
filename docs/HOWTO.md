# How To

This doc will show you all of the functions in Osrmscript.

## How To: Print a string

You can print any screen by typing:

```makefile
// outputs with "Hello World"!
say: "Hello World!";
```

Just replace "Hello World!" with whatever you want. (make sure its in quotes)

## How To: Prompt the user

It is very easy. Just type:

```text
// outputs with "Enter your name: " followed by the user to input it.
ask: "Enter your name: ";
```

In this example, Osrmscript is asking for an input, and it is using "Enter your name: " as the message to prompt it.

## How to: Assign a variable

Assigning a variable goes like:

```Makefile
let ~var~ = "Hello World!";
```

And you can use it like:

```Makefile
say: ~var~
```

Just replace var with whatever you want
NOTE: MAKE SURE THE VARIABLE IS IN TILDE (~) OR ELSE IT WON'T WORK

## How to: Run code

The only way to run/read Osrmscript code is with NodeJS. Assuming you have downloaded the Osrmscript package then you can do the following:

```javascript
const osrmscript = require('osrmscript');

var code = 'YOUR OSRMSCRIPT CODE HERE';
osrmscript.runOsrmscript(code);
```

And then replace 'YOUR OSRMSCRIPT CODE HERE' with actual Osrmscript code. I must warn you though, as runOsrmscript() uses eval() to run the code. If you want it only to return the javascript ocde, type:

```javascript
const osrmscript = require('osrmscript');

var code = 'YOUR OSRMSCRIPT CODE HERE';
var jsCode = osrmscript.translateToJavascript(code);
```

## How to: Read a .osrm file

As of the newest update 1.3.0 reading a .osrm file actually works! Tt goes like:

```javascript
const osrmscript = require('osrmscript');

var fileName = '/path/to/file/filename.osrm'
var jsCode = osrmscript.translateFileToJavascript(fileName)
```

Then that way it is feel much easier.
