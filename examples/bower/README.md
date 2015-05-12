BOWER EXAMPLE WITH GULP
===========

## Get Setup
``` javascript
AC02LR03FFT4P:~ chadsmith$ cd www/gulpNgPittsburgh-src/examples/bower/
AC02LR03FFT4P:sass chadsmith$ npm install
npm WARN package.json example-sass@0.0.1 No description
npm WARN package.json example-sass@0.0.1 No repository field.
npm WARN package.json example-sass@0.0.1 No README data
npm http GET https://registry.npmjs.org/gulp-bower
... lots of npm installs ...
gulp-bower@0.0.10 node_modules/gulp-bower
├── through2@0.6.2 (xtend@4.0.0, readable-stream@1.0.33)
├── walk@2.3.3 (foreachasync@3.0.0)
├── gulp-util@3.0.1 (lodash._reinterpolate@2.4.1, minimist@1.1.1, vinyl@0.4.6, chalk@0.5.1, dateformat@1.0.11, multipipe@0.1.2, lodash.template@2.4.1, lodash@2.4.2)
└── bower@1.4.1 (is-root@1.0.0, junk@1.0.1, stringify-object@1.0.1, user-home@1.1.1, chmodr@0.1.0, abbrev@1.0.5, rimraf@2.3.3, opn@1.0.2, archy@1.0.0, bower-logger@0.2.2, lockfile@1.0.0, bower-endpoint-parser@0.2.2, graceful-fs@3.0.6, lru-cache@2.6.2, nopt@3.0.1, retry@0.6.1, tmp@0.0.24, q@1.4.0, request-progress@0.3.1, chalk@1.0.0, shell-quote@1.4.3, which@1.1.1, semver@2.3.2, fstream@1.0.6, p-throttler@0.1.1, mkdirp@0.5.0, promptly@0.2.0, bower-json@0.4.0, glob@4.5.3, insight@0.5.3, fstream-ignore@1.0.2, update-notifier@0.3.2, decompress-zip@0.1.0, tar-fs@1.5.0, request@2.53.0, github@0.2.4, cardinal@0.4.4, bower-registry-client@0.3.0, bower-config@0.6.1, mout@0.11.0, handlebars@2.0.0, configstore@0.3.2, inquirer@0.8.0)
```

## Run Example
``` javascript
AC02LR03FFT4P:bower chadsmith$ gulp build-advanced
[09:00:14] Using gulpfile ~/www/gulpNgPittsburgh-src/examples/bower/gulpfile.js
[09:00:14] Starting 'bower-advanced'...
[09:00:14] Using cwd:  /Users/chadsmith/www/gulpNgPittsburgh-src/examples/bower
[09:00:14] Using bower dir:  ./bower_components
[09:00:14] Using cwd:  ./cart
[09:00:14] Using bower dir:  ./bower_components
[09:00:15] bower cached git://github.com/cloudfour/hideShowPassword.git#2.0.3
[09:00:15] bower validate 2.0.3 against git://github.com/cloudfour/hideShowPassword.git#2.0.3
[09:00:15] bower cached git://github.com/angular/bower-angular.git#1.3.15
[09:00:15] bower validate 1.3.15 against git://github.com/angular/bower-angular.git#~1.3
[09:00:15] bower cached git://github.com/jquery/jquery.git#1.11.2
[09:00:15] bower validate 1.11.2 against git://github.com/jquery/jquery.git#>=1.9.0 <2.0.0
[09:00:15] bower cached git://github.com/filamentgroup/loadCSS.git#0.1.4
[09:00:15] bower validate 0.1.4 against git://github.com/filamentgroup/loadCSS.git#~0.1.1
[09:00:15] bower cached git://github.com/bestiejs/json3.git#3.3.2
[09:00:15] bower validate 3.3.2 against git://github.com/bestiejs/json3.git#~3.3.1
[09:00:15] bower new version for git://github.com/filamentgroup/loadCSS.git#~0.1.1
[09:00:15] bower resolve git://github.com/filamentgroup/loadCSS.git#~0.1.1
[09:00:16] bower download https://github.com/filamentgroup/loadCSS/archive/0.1.6.tar.gz
[09:00:16] bower cached git://github.com/es-shims/es5-shim.git#3.1.1
[09:00:16] bower validate 3.1.1 against git://github.com/es-shims/es5-shim.git#~3.1.0
[09:00:16] bower new version for git://github.com/jquery/jquery.git#>=1.9.0 <2.0.0
[09:00:16] bower resolve git://github.com/jquery/jquery.git#>=1.9.0 <2.0.0
[09:00:16] bower download https://github.com/jquery/jquery/archive/1.11.3.tar.gz
[09:00:16] bower extra-resolution Unnecessary resolution: angular#~1.3.x
[09:00:16] bower install json3#3.3.2
[09:00:16] bower install es5-shim#3.1.1
[09:00:16] bower install angular#1.3.15
[09:00:16] bower extract archive.tar.gz
[09:00:16] bower resolved git://github.com/filamentgroup/loadCSS.git#0.1.6
[09:00:16] bower extract archive.tar.gz
[09:00:17] bower resolved git://github.com/jquery/jquery.git#1.11.3
[09:00:17] bower install hideShowPassword#2.0.3
[09:00:17] bower install loadcss#0.1.6
[09:00:17] bower install jquery#1.11.3
[09:00:18] Finished 'bower-advanced' after 3.5 s
[09:00:18] Starting 'build-advanced'...
[09:00:18] Finished 'build-advanced' after 7.36 μs
```

## Finished Product
You can now look in the folder and see there's two new folders. The first is in the root directory named ```bower_components``` that contains the installed items from bower in the root ```bower.json``` file. The second folder is in ```cart/bower_components``` which is from the ```cart/bower.json``` file.