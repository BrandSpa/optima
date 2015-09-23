var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');


gulp.task('sass', function() {
  return sass('sass/')
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest('css'));
});

gulp.task('default', ['dependencies', 'watch']);
