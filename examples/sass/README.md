SASS EXAMPLE WITH GULP
===========

## Requirements
You must have Ruby and Compass setup on the build box prior to running this example. If not you will get the following message when running gulp:
``` javascript
[08:20:10] Plumber found unhandled error:
 Error in plugin 'gulp-compass'
You need to have Ruby and Compass installed and in your system PATH for this task to work.
```

## Get Setup
``` javascript
AC02LR03FFT4P:~ chadsmith$ cd www/gulpNgPittsburgh-src/examples/sass/
AC02LR03FFT4P:sass chadsmith$ npm install
npm WARN package.json example-sass@0.0.1 No description
npm WARN package.json example-sass@0.0.1 No repository field.
npm WARN package.json example-sass@0.0.1 No README data
npm http GET https://registry.npmjs.org/gulp-sass
... lots of npm installs ...
gulp-sass@0.4.1 node_modules/gulp-sass
├── clone@0.1.19
├── event-stream@3.0.20 (stream-combiner@0.0.4, duplexer@0.1.1, from@0.1.3, pause-stream@0.0.11, map-stream@0.0.5, split@0.2.10, through@2.3.7)
├── gulp-util@2.2.20 (lodash._reinterpolate@2.4.1, minimist@0.2.0, vinyl@0.2.3, chalk@0.5.1, lodash.template@2.4.1, through2@0.5.1, dateformat@1.0.11, multipipe@0.1.2)
└── node-sass@0.7.0 (colors@0.6.0-1, node-watch@0.3.4, mkdirp@0.3.5, optimist@0.6.1, mocha@1.13.0)
```

## Run Example
``` javascript
AC02LR03FFT4P:sass chadsmith$ gulp build
[08:22:57] Using gulpfile ~/www/gulpNgPittsburgh-src/examples/sass/gulpfile.js
[08:22:57] Starting 'compass'...
directory dist/css

    write dist/css/theme.css

[08:22:57] Finished 'compass' after 417 ms
[08:22:57] Starting 'build'...
[08:22:57] Finished 'build' after 5.6 μs
AC02LR03FFT4P:sass chadsmith$
```

## Finished Product
You can now look in the folder and see there's a ``` dist/css ``` folder that has one file named ```theme.css``` in it.