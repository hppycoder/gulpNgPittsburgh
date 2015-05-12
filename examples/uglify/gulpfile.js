var gulp = require('gulp'),
   uglify = require('gulp-uglify');

gulp.task('minifyJS', function() {
  return gulp.src('./src/cart.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// Default task, build relies on cartAnnotate to be finished
gulp.task('build', ['minifyJS']);