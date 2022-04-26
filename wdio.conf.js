exports.config = {
  runner: 'local',
  specs: [
    './test/tests/ui/**/*.e2e.ts'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--headless',
        '--disable-gpu',
        '--disable-logging',
        '--window-size=1280,1024'
      ]
    }
  }],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.tmsandbox.co.nz',
  waitforTimeout: 10000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 3,
  services: [
    ['chromedriver', {
      logFileName: 'wdio-chromedriver.log',
      outputDir: 'logs',
      args: ['--silent']
    }]
  ],
  framework: 'jasmine',
  reporters: [
    'spec',
    ['junit', {
      outputDir: './junit',
      outputFileFormat: function () {
        return 'ui-test-results.xml';
      }
    }]
  ],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    requires: ['tsconfig-paths/register']
  }
};
