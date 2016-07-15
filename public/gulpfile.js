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

// npm i -D watchify browserify gulp vinyl-source-stream vinyl-buffer gulp-util gulp-sourcemaps lodash babelify babel-preset-es2015 babel-preset-react

// add custom browserify options here
var customOpts = {
  entries: ['./app/app.js'],
   paths: [
      './node_modules',
      './app',
      './app/lib',
      './app/components',
      './app/options/'
    ],
};

var opts = lodash.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(babelify, {presets: ["es2015", "react"]});

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler

b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b
    .bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./js/dist'));

}

gulp.task('compile', bundle);

// sass
gulp.task('styles', function() {
    gulp.src('./public/sass/improve.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/dist'));
});


gulp.task('default',function() {
    gulp.watch('./public/sass/**/*', ['styles']).on('change', reload);
});
