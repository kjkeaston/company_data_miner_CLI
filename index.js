#!/usr/bin/env node

const colors = require('colors/safe');

const findCompByState = require('./lib/findCompByState.js');
const findCompBeforeDate = require('./lib/findCompBeforeDate.js');
const findCompAfterDate = require('./lib/findCompAfterDate.js');
const findCompBetweenSize = require('./lib/findCompBetweenSize.js');
const findCompByType = require('./lib/findCompByType.js');

const [,, ...args] = process.argv;

var filePath = args[0];
var command = args[1];
var commandArg = args[2];
console.log(colors.blue("FILE PATH >>> "), filePath);
console.log(colors.blue("COMMAND >>> "), command);
console.log(colors.blue("ARGUMENT >>> "), commandArg);

if ( args.length < 3 ) {
  console.log(colors.red("missing file_path, command, or argument"));
} else if ( args.length === 3) {
    switch (command) {
      case 'locate':
        findCompByState(filePath, commandArg);
        break;

      case 'find_before':
        findCompBeforeDate(filePath, commandArg);
        break;

      case 'find_after':
        findCompAfterDate(filePath, commandArg);
        break;

      case 'find_companies_between_size':
        findCompBetweenSize(filePath, commandArg);
        break;

      case 'find_type':
        findCompByType(filePath, commandArg);
        break;
    }
  } else if (args.length > 3) {
    console.log(colors.red("Too many commands entered!"));
  }
