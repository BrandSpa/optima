'use strict';
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var lodash = require('lodash');
var babelify = require('babelify');

// sass
gulp.task('styles', function() {
    gulp.src('./public/sass/improve.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/dist'));
});


gulp.task('default',function() {
    gulp.watch('./public/sass/**/*', ['styles']).on('change', reload);
});
