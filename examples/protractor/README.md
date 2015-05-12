PROTRACTOR EXAMPLE WITH GULP
===========

## Requirements
You must have Protractor setup and fully functional on the build box. View a great tutorial on how to get [setup with Protractor](http://angular.github.io/protractor/#/tutorial).

## Get Started
``` javascript
AC02LR03FFT4P:~ chadsmith$ cd www/gulpNgPittsburgh-src/examples/protractor/
AC02LR03FFT4P:sass chadsmith$ npm install
npm WARN package.json example-protractor@0.0.1 No description
npm WARN package.json example-protractor@0.0.1 No repository field.
npm WARN package.json example-protractor@0.0.1 No README data
npm http GET https://registry.npmjs.org/gulp
npm http GET https://registry.npmjs.org/protractor
npm http 200 https://registry.npmjs.org/gulp
... lots of npm installs ...
protractor@2.0.0 node_modules/protractor
├── jasminewd@1.1.0
├── jasminewd2@0.0.3
├── html-entities@1.1.2
├── q@1.0.0
├── saucelabs@0.1.1
├── minijasminenode@1.1.1
├── adm-zip@0.4.4
├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
├── glob@3.2.11 (inherits@2.0.1, minimatch@0.3.0)
├── accessibility-developer-tools@2.6.0
├── source-map-support@0.2.10 (source-map@0.1.32)
├── lodash@2.4.2
├── request@2.36.0 (json-stringify-safe@5.0.0, aws-sign2@0.5.0, qs@0.6.6, oauth-sign@0.3.0, tunnel-agent@0.4.0, forever-agent@0.5.2, mime@1.2.11, node-uuid@1.4.3, http-signature@0.10.1, form-data@0.1.4, tough-cookie@1.1.0, hawk@1.0.0)
├── jasmine@2.1.1 (jasmine-core@2.1.3)
└── selenium-webdriver@2.45.1 (tmp@0.0.24, rimraf@2.3.3, xml2js@0.4.4, ws@0.7.1)
```

## Run Example
``` javascript
AC02LR03FFT4P:protractor chadsmith$ gulp build
[10:26:48] Using gulpfile ~/www/gulpNgPittsburgh-src/examples/protractor/gulpfile.js
[10:26:48] Starting 'e2eTests'...
[10:26:48] Finished 'e2eTests' after 340 ms
[10:26:48] Starting 'build'...
[10:26:48] Finished 'build' after 5.66 μs
Using the selenium server at http://localhost:4444/wd/hub
[launcher] Running 1 instances of WebDriver
.

Finished in 4.73 seconds
1 test, 1 assertion, 0 failures

[launcher] 0 instance(s) of WebDriver still running
[launcher] chrome #1 passed
AC02LR03FFT4P:protractor chadsmith$
```

## Finished
That's it! Found above is how you link in all the protractor tests into the gulp build process.