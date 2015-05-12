ngAnnotate EXAMPLE WITH GULP
===========

## Get Setup
``` javascript
AC02LR03FFT4P:ngAnnotate chadsmith$ npm install
npm WARN package.json application-name@0.0.1 No description
npm WARN package.json application-name@0.0.1 No repository field.
npm WARN package.json application-name@0.0.1 No README data
npm http GET https://registry.npmjs.org/gulp
npm http GET https://registry.npmjs.org/gulp-ng-annotate
... lots of npm installs ...
gulp-ng-annotate@0.3.6 node_modules/gulp-ng-annotate
├── merge@1.2.0
├── through2@0.4.2 (xtend@2.1.2, readable-stream@1.0.33)
├── vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
├── gulp-util@2.2.20 (lodash._reinterpolate@2.4.1, minimist@0.2.0, chalk@0.5.1, vinyl@0.2.3, dateformat@1.0.11, lodash.template@2.4.1, through2@0.5.1, multipipe@0.1.2)
└── ng-annotate@0.13.0 (tryor@0.1.2, stringset@0.2.1, alter@0.2.0, simple-is@0.2.0, stable@0.1.5, stringmap@0.2.2, simple-fmt@0.1.0, convert-source-map@0.4.1, ordered-ast-traverse@0.1.1, optimist@0.6.1, source-map@0.1.43, esprima@1.2.5, acorn@0.9.0)
```

## Run Example
``` javascript
AC02LR03FFT4P:ngAnnotate chadsmith$ gulp build
[10:03:59] Using gulpfile ~/www/gulpNgPittsburgh-src/examples/ngAnnotate/gulpfile.js
[10:03:59] Starting 'cartAssets'...
[10:03:59] Finished 'cartAssets' after 41 ms
[10:03:59] Starting 'cartAnnotate'...
[10:03:59] Finished 'cartAnnotate' after 25 ms
[10:03:59] Starting 'build'...
[10:03:59] Finished 'build' after 4.87 μs
AC02LR03FFT4P:ngAnnotate chadsmith$
```

## Finished Product
You can now look in the folder and see there's a ``` dist/scripts ``` which contains a ```cart.js``` file. This file is the annotated version that can be ran through uglify or something similar.