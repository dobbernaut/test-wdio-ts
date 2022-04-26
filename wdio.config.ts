import { TimelineService } from 'wdio-timeline-reporter/timeline-service';

const browserOptions = [
  '--disable-gpu',
  '--disable-logging',
  '--window-size=1440,900',
];
if (process.env.HEADLESS === 'true') {
  browserOptions.push('--headless');
}

export const config = {
  runner: 'local',
  specs: [
    './test/tests/ui/**/*.e2e.ts'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'goog:chromeOptions': {
      args: browserOptions
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
      outputDir: './artifacts/logs',
      args: ['--silent']
    }],
    [TimelineService]
  ],
  framework: 'mocha',
  reporters: [
    'spec',
    ['junit', {
      outputDir: './artifacts/report/junit',
      outputFileFormat: function () {
        return 'ui-test-results.xml';
      }
    }],
    [
      'timeline',
      {
        outputDir: './artifacts/report',
        embedImages: true,
        images: {
          quality: 80,
          resize: false,
          reductionRatio: 2,
        },
        screenshotStrategy: 'on:error',
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
    require: [
      'tsconfig-paths/register'
    ]
  }
};
