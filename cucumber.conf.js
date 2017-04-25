var e2eConfig = require('./test/e2e/config/e2e_framework_config');
// var argv = require('yargs').argv;
exports.config = {
  // protractor configuration
  specs: [
    'test/e2e/features/**/*.feature'
  ],
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  chromeOnly: false,
  allScriptsTimeout: e2eConfig.defaultAllScriptsTimeout,
  getPageTimeout: e2eConfig.defaultGetPageTimeout,
  // baseUrl: 'https://github.com',
  plugins: [{
    path: 'test/e2e/plugins/core.js'
  }],

  // cucumber configuration
  cucumberOpts: {
    require: ['test/e2e/features/**/step_definitions/*.js', 'test/e2e/features/**/support/*.js'],
    strict: true,
    // format: ['progress:test/output/dryrun.json']
    format: ['json:test/output/results.json', 'rerun:test/output/rerun.txt']
  }
};