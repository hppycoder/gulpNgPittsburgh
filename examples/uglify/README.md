UGLIFYJS EXAMPLE WITH GULP
===========

## Get Setup
``` javascript
AC02LR03FFT4P:uglify chadsmith$ npm install
npm WARN package.json application-name@0.0.1 No description
npm WARN package.json application-name@0.0.1 No repository field.
npm WARN package.json application-name@0.0.1 No README data
npm http GET https://registry.npmjs.org/gulp
npm http GET https://registry.npmjs.org/gulp-uglify
... lots of npm installs ...
gulp-uglify@1.0.2 node_modules/gulp-uglify
├── deepmerge@0.2.7
├── through2@0.6.5 (xtend@4.0.0, readable-stream@1.0.33)
├── vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
├── gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, object-assign@2.0.0, array-uniq@1.0.2, lodash._reescape@3.0.0, lodash._reevaluate@3.0.0, lodash._reinterpolate@3.0.0, replace-ext@0.0.1, vinyl@0.4.6, lodash.template@3.5.1, minimist@1.1.1, chalk@1.0.0, dateformat@1.0.11, multipipe@0.1.2)
└── uglify-js@2.4.15 (uglify-to-browserify@1.0.2, async@0.2.10, optimist@0.3.7, source-map@0.1.34)
```

## Run Example
``` javascript
AC02LR03FFT4P:uglify chadsmith$ gulp build
[10:35:40] Using gulpfile ~/www/gulpNgPittsburgh-src/examples/uglify/gulpfile.js
[10:35:40] Starting 'minifyJS'...
[10:35:40] Finished 'minifyJS' after 41 ms
[10:35:40] Starting 'build'...
[10:35:40] Finished 'build' after 6.34 μs
AC02LR03FFT4P:uglify chadsmith$
```

## Finished Product
You can now look in the folder and see there's a ```dist/cart.js``` file that contains an uglified version of the file in ```src/cart.js```