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

```makefile
let ~var~ = "Hello World!";
```

And you can use it like:

```makefile
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

As of the newest update 1.3.2 reading a .osrm file actually works! It goes like:

```javascript
const osrmscript = require('osrmscript');

var fileName = '/path/to/file/filename.osrm'
var jsCode = osrmscript.translateFileToJavascript(fileName)
```

Then that way it is much easier.

NOTE: It doesn't run by itself. You can make it run using the eval() method.

## How to: Typecast to int

To do this type:

```makefile
// Assigns itself to the integer version of itself
int: ~var~
```

NOTE: When using this method, it ONLY works for variables. When typecasting, you have to give it a line, because it assigns Itself to an integer. For example: `makefile int: ~var~` is the same as: `javascript let var = Number(var);`

## How to: Typecase to other datatypes (String and Float ONLY)

For Strings type:

```makefile
//Typecasting to string
str: ~var~
```

For Floats type:

```makefile
//Typecasting to float
flt: ~var~
```
## How to: Use the brand new CLI

Yes. I have finally finished it. Apparently it will not run with the update i had for Node JS. (That is because the minimum requirement for one of the modules the cli uses is at least Node 16, and my computer is too old to run that.)

Okay so to run the CLI, type:

```bash
npx osrmscript
```

To run a .osrm file in the CLI type:

```bash
npx osrmscript run -f <filename>
```

but replace <filename> with the name of your file. You can even convert a .osrm file into a javascript file with:

```bash
npx osrmscript run -f <filename> -o output.js
```

but replace "output.js" with whatever you want the output file to be named.
