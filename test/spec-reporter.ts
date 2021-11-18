import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import { JUnitXmlReporter } from 'jasmine-reporters';
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayStacktrace: StacktraceOption.NONE
  },
  customProcessors: [CustomProcessor]
}));
jasmine.getEnv().addReporter(new JUnitXmlReporter({
  savePath: './junit',
  filePrefix: 'api-test-results',
  consolidateAll: true
}));
