
These are tests for the Trade Me's site and services.

The tests are divided into two. A UI test suite that tests the Trade Me website, and an API test suite which test Trade Me's services.

The tests runs on node and is written on Typescript. It uses [axios](https://axios-http.com/) as the http client for testing the services and [webdriverio](https://webdriver.io/) for the website. Both are using [Jasmine](https://jasmine.github.io/) for the test framework.

## Prerequisites

You will need to have [Node](https://nodejs.org/en/) installed (used v12.13.0) and able to run npm (used v6.12.0) commands. Run the commands shown here from bash or shell.

Webdriverio uses [selenium-standalone](https://www.npmjs.com/package/selenium-standalone) to run the browser tests, so [Java is required to be available](https://github.com/vvo/selenium-standalone/blob/HEAD/docs/java-versions.md) from your machine.

You can get the [JDK](https://jdk.java.net/archive/) from here, extract and add Java to your machine PATH. These tests were tested on JDK version 11.

![JDK 11](files/jdk11.png)

Webdriverio is also using [webdriverio/sync](https://webdriver.io/docs/sync-vs-async/) which allows the tests to be written without the need for async/await.

![wdioSync](files/wdioSync.png)

This requires a C++ compiler to be available from your machine. [Choose either options here to install if not already on your machine](https://www.npmjs.com/package/node-gyp#option-1).

## Setup
To set up the project, install the npm packages by running

```bash
npm ci
```

## Test
The tests involves logging in and providing authorisation tokens retreived from the environment variables. When running these tests from a build pipeline, add these to the pipeline environment variables.

To set this on your machine, you will need to add these environment variables with the corresponding value **OR** you can **use the two test commands provided below under the Run test section**.

```text
testpassword=REPLACEWITHuserpassword
token=REPLACEWITHoauthtoken
tokensecret=REPLACEWITHoauthtokensecret
key=REPLACEWITHconsumerkey
keysecret=REPLACEWITHconsumersecret
```
## Run test
**To run the test**

For running the ui tests, use:
```bash
npm run ui-test
```

**to include the required environment variables from the command line:**
```bash
testpassword=**REPLACEWITHuserpassword** token=**REPLACEWITHoauthtoken** tokensecret=**REPLACEWITHoauthtokensecret** key=**REPLACEWITHconsumerkey** keysecret=**REPLACEWITHconsumersecret** npm run ui-test
```

![uiTest](files/uiTest.png)

For running the api tests, use:
```bash
npm run api-test
```

**to include the required environment variables from the command line:**
```bash
testpassword=**REPLACEWITHuserpassword** token=**REPLACEWITHoauthtoken** tokensecret=**REPLACEWITHoauthtokensecret** key=**REPLACEWITHconsumerkey** keysecret=**REPLACEWITHconsumersecret** npm run api-test
```

![apiTest](files/apiTest.png)
