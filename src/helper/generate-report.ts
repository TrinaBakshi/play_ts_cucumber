import {generate} from 'multiple-cucumber-html-reporter';

generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright Automation Report",
  pageTitle: "Sample Test Report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "155.0.8059.39",
    },
    device: "LAPTOP-NA6KN98P",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    projectName: 'Login sample project',
    release: '1.2.0',
    testCycle: 'Cycle 1',
    buildNumber: 'Build 1',
    environment: 'production',
    ciPipeline: 'GitHub Actions',
  },
});