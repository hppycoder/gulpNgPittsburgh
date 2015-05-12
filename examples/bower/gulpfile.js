// Define what modules we require
var gulp = require('gulp'),
  bower = require('gulp-bower'),
  merge = require('merge-stream');

// Setup a task named bower so others could use as dependency
gulp.task('bower', function () {
  // Run bower (which looks for bower.json), and write all files to bower_components
  return bower().pipe(gulp.dest('./bower_components'));
});

// Setup a new task that's more advanced
gulp.task('bower-advanced', function () {
  // Merge two streams together
  return merge(
    // Run bower (which looks for bower.json), and write all files to bower_components
    bower().pipe(gulp.dest('./bower_components')),
    // Run bower in a different directory, writing output to the other directory
    bower({cwd: './cart'})
      .pipe(gulp.dest('./cart/bower_components'))
  );
});

// Default task, build relies on bower to be finished
gulp.task('build', ['bower']);
// Advanced example showing merge-stream and changing directories
gulp.task('build-advanced', ['bower-advanced']);