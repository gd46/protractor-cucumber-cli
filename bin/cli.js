#!/usr/bin/env node

var program = require('commander');
var path = require('path');
require('shelljs/global');
var cliHelpers = require('../lib/cli-helpers');

var configFile = path.resolve('./cucumber.conf.js');

var flags = [];
var baseUrl;

flags.unshift(configFile);
flags.unshift(path.resolve('./node_modules/protractor/bin', 'protractor'));

program
  .version('0.0.1')
  .description('Cli tool to help run e2e tests')

program
  .alias('e')
  .option('-e, --env', 'Set baseUrl using shortcut environment', cliHelpers.getBaseUrl)
  // .arguments('<cmd> [env]')
  .action(function (cmd, env) {
     console.log('cmd', cmd);
     console.log('env', env);
     cmdValue = cmd;
     baseUrl = cliHelpers.getBaseUrl(cmdValue);
  }).parse(process.argv);  
  
  program
  	.option('-b, --baseUrl','Set baseUrl using a fully qualified domain name')
  	// .arguments('<cmd> [baseUrl]')
  	.action(function (cmd, env) {
  		cmdValue = cmd;
  		baseUrl = cmdValue;
  	})

// program.parse(process.argv);  	

  if(baseUrl) {
  	flags.push('--baseUrl='+baseUrl);
  }

  var execCmd = flags.join(' ');
  console.log('execCmd', execCmd);
  exec(execCmd);