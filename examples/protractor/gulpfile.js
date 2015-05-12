// Define what modules we require
var gulp = require('gulp');

gulp.task('e2eTests', function() {
  var protractor = require('gulp-protractor').protractor;
  gulp.src(['./test/e2e/*.js'])
    .pipe(protractor({
      configFile: './protractor.conf.js',
      args: ['--baseUrl', 'http://www.giftcards.com']
    }))
    .on('error', function(e) { throw e; });
});

// Default task, starts running e2eTests and reports findings
gulp.task('build', ['e2eTests']);