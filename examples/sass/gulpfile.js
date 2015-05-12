/**
 * Created by chadsmith on 5/12/15.
 */

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  compass = require('gulp-compass'),
  plumber = require('gulp-plumber');

gulp.task('compass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      css: 'dist/css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['compass']);