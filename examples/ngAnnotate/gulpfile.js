// Define what modules we require
var gulp = require('gulp'),
  useref = require('gulp-useref'),
  ngAnnotate = require('gulp-ng-annotate');

gulp.task('cartAssets', function () {
  var assets = useref.assets();

  return gulp.src('./app/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
});

// Setup task that has a dependency on cartAssets
gulp.task('cartAnnotate', ['cartAssets'], function () {
  return gulp.src('./dist/scripts/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/scripts'));
});

// Default task, build relies on cartAnnotate to be finished
gulp.task('build', ['cartAnnotate']);