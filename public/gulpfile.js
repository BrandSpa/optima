'use strict';
var gulp = require('gulp');


// sass
gulp.task('styles', function() {
    gulp.src('./public/sass/improve.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/dist'));
});


gulp.task('default',function() {
    gulp.watch('./public/sass/**/*', ['styles']).on('change', reload);
});
