#!/usr/bin/env node

const program = require('commander');

const findCompByState = require('./lib/findCompByState.js');
const findCompBeforeDate = require('./lib/findCompBeforeDate.js');
const findCompAfterDate = require('./lib/findCompAfterDate.js');
const findCompBetweenSize = require('./lib/findCompBetweenSize.js');
const findCompByType = require('./lib/findCompByType.js');

// Find companies by state
program
  .command('locate')
  .alias('loc')
  .description('Find companies by their state')
  .action(function(args) {
    findCompByState(args);
  });

// Find companies founded in or before certain year
program
  .command('find_before')
  .alias('before')
  .description("Find companies founded during and before a specified year")
  .action(function(args) {
    findCompBeforeDate(args);
  });

// Find companies founded in or after certain year
program
  .command('find_after')
  .alias('after')
  .description("Find companies founded during and after a specified year")
  .action(function(args) {
    findCompAfterDate(args);
  });

// Find companies by their number of full-time employees
program
  .command('find_companies_between_size')
  .alias('size')
  .description("Find companies by their number of full-time employees")
  .action(function(args) {
    findCompBetweenSize(args);
  });

// Find companies by their industry/type/sector
program
  .command('find_type')
  .alias('type')
  .description("Find companies by their industry")
  .action(function(args) {
    findCompByType(args);
  });

program.parse(process.argv);
