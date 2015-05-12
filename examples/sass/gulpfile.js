// Define what modules we require
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  compass = require('gulp-compass'),
  plumber = require('gulp-plumber');

// Setup a task named compass so others could use as dependency
gulp.task('compass', function () {
  // Glob pattern to get a stream for all SASS files
  return gulp.src('./sass/*.scss')
    // Temporarily replace the onerror stream handler
    .pipe(plumber())
    // Run all scss files through compass
    .pipe(compass({
      css: 'dist/css',
      sass: 'sass'
    }))
    // End result from compass is a .css
    // Write that into dist/css (or update if already exists)
    .pipe(gulp.dest('dist/css'));
});

// Default task, build relies on compass to be finished
gulp.task('build', ['compass']);