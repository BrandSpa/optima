'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var debowerify = require('debowerify');
var reactify = require('reactify');

gulp.task('browserify', function () {
  var options = {
    insertGlobals: true,
    paths: [
      './node_modules',
      './app/',
      './app/views',
      './app/utils/',
      './app/controllers/',
      './app/models/',
      './app/views/',
      './app/templates/',
      './app/helpers/',
      './app/config/'
    ]
  };

 browserify('./app/app.js', options)
    .transform(reactify)
    .bundle()
    .on('error', function(err) {
      console.log(err.toString());
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('js/dist'));
});
