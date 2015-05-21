var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

gulp.task('concat-css', function(){
  gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'css/improve.css',
    'css/fancySelect.css',
    'css/summernote.css',
    'css/classic.css',
    'css/classic.date.css',
    'css/classic.time.css',
    'node_modules/nprogress/nprogress.css',
    'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
    'bower_components/sidr/stylesheets/jquery.sidr.dark.css',
    'node_modules/alertify/themes/alertify.core.css',
    'node_modules/alertify/themes/alertify.bootstrap.css'
  ])
  .pipe(concat('app.css'))
  .pipe(gulp.dest('css/dist/'));
});

gulp.task('dependencies', function(){
  gulp.src([
    // NPM
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/handlebars/dist/handlebars.min.js',
    'node_modules/backbone/node_modules/underscore/underscore.js',
    'node_modules/backbone/backbone.js',
    'node_modules/moment/min/moment-with-locales.min.js',
    'node_modules/jquery-serializejson/jquery.serializejson.min.js',
    'node_modules/alertify/lib/alertify.min.js',
    'node_modules/summernote/dist/summernote.min.js',
    'node_modules/chart.js/Chart.min.js',
    'node_modules/nprogress/nprogress.js',

    // Bower
    'bower_components/sidr/jquery.sidr.min.js', //need to change to Slideout.js
    'bower_components/slimscroll/jquery.slimscroll.min.js',
    'bower_components/timeago/jquery.timeago.js',
    'bower_components/timeago/locales/jquery.timeago.es.js',
    'bower_components/jquery-ui/jquery-ui.min.js',
    'bower_components/pickadate/lib/picker.js',
    'bower_components/pickadate/lib/picker.date.js',
    'bower_components/pickadate/lib/picker.time.js',
    'bower_components/pickadate/lib/translations/es_ES.js',
    'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
    'bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min.js',

    // Plugins folder
    'js/plugins/curry-0.8.min.js',
    'js/plugins/socket.io.min.js',

    ])
  .pipe(concat('dependencies.js'))
  .pipe(gulp.dest('js/dist/'));
});

gulp.task('coffee', function() {
  gulp.src([

    //Helpers
    'app/helpers/backbone_helpers.coffee',

    //Models
    'app/models/activity.coffee',
    'app/models/company.coffee',
    'app/models/contact.coffee',
    'app/models/product.coffee',
    'app/models/quotation.coffee',
    'app/models/report.coffee',
    'app/models/service.coffee',
    'app/models/todo.coffee',
    'app/models/tracking.coffee',
    'app/models/users.coffee',

    //Views

    //pages
    'app/views/pages/dashboard.coffee',

    //activities
    'app/views/activities/item.coffee',
    'app/views/activities/list.coffee',
    'app/views/activities/item_quotation.coffee',
    'app/views/activities/list_quotation.coffee',

    //companies
    'app/views/companies/item.coffee',
    'app/views/companies/list.coffee',
    'app/views/companies/create.coffee',
    'app/views/companies/edit.coffee',
    'app/views/companies/contacts.coffee',
    'app/views/companies/create_quotation.coffee',
    'app/views/companies/item_result.coffee',
    'app/views/companies/list_results.coffee',

    //contacts
    'app/views/contacts/item.coffee',
    'app/views/contacts/list.coffee',
    'app/views/contacts/create_quotation.coffee',
    'app/views/contacts/create.coffee',
    'app/views/contacts/edit.coffee',
    'app/views/contacts/item_company.coffee',
    'app/views/contacts/list_company.coffee',
    'app/views/contacts/item_quotation.coffee',
    'app/views/contacts/list_quotation.coffee',

    //quotations
    'app/views/quotations/item.coffee',
    'app/views/quotations/list.coffee',
    'app/views/quotations/list_filters.coffee',
    'app/views/quotations/list_paginate.coffee',
    'app/views/quotations/results.coffee',
    'app/views/quotations/create.coffee',
    'app/views/quotations/app.coffee',
    'app/views/quotations/status.coffee',
    'app/views/quotations/options.coffee',
    'app/views/quotations/comment.coffee',
    'app/views/quotations/no_effective.coffee',
    'app/views/quotations/no_send.coffee',
    'app/views/quotations/mail.coffee',
    'app/views/quotations/times.coffee',

    //products
    'app/views/products/item_quotation.coffee',
    'app/views/products/list_quotation.coffee',
    'app/views/products/create_quotation.coffee',
    'app/views/products/edit_quotation.coffee',

    //services
    'app/views/services/item.coffee',
    'app/views/services/list.coffee',
    'app/views/services/create.coffee',
    'app/views/services/edit.coffee',
    'app/views/services/item_quotation.coffee',
    'app/views/services/list_quotation.coffee',
    'app/views/services/create_quotation.coffee',
    'app/views/services/item_result.coffee',
    'app/views/services/list_results.coffee',
    'app/views/services/list_quotation_select.coffee',

    //todos
    'app/views/todos/item.coffee',
    'app/views/todos/list.coffee',
    'app/views/todos/create.coffee',
    'app/views/todos/mail.coffee',

    //trackings
    'app/views/trackings/item.coffee',
    'app/views/trackings/list.coffee',
    'app/views/trackings/create.coffee',
    'app/views/trackings/todo.coffee',
    'app/views/trackings/todos.coffee',

    //reports
    'app/views/reports/filters.coffee',
    'app/views/reports/by_status.coffee',
    'app/views/reports/by_status_count.coffee',
    'app/views/reports/by_find_us.coffee',
    'app/views/reports/by_find_us_count.coffee',
    'app/views/reports/by_advisor.coffee',
    'app/views/reports/by_type.coffee',
    'app/views/reports/by_no_effective.coffee',
    'app/views/reports/by_diff_sent.coffee',
    'app/views/reports/total.coffee',

    'app/views/app.coffee',

    //App
    'app/router.coffee',
    'app/libs/handlebars_partials.coffee'

    ])
  .pipe(coffee({bare: true}).on('error', gutil.log))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js/dist/'));
});

gulp.task('sass', function() {
  return sass('sass/')
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest('css'));
});

//compile templates
gulp.task('templates', function () {
  gulp.src([
    'app/templates/*.hbs',
    'app/templates/*/*.hbs',
    'app/templates/*/*/*.hbs'
  ])
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'optima.templates',
          noRedeclare: true, // Avoid duplicate declarations
        }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('js/dist'));
});

gulp.task('watch', ['sass', 'coffee'], function(){
  gulp.watch('sass/*.sass', ['sass']);
  gulp.watch([
    'app/*.coffee',
    'app/*/*.coffee',
    'app/**/**/*.coffee'
    ], ['coffee']);
  gulp.watch([
    'app/templates/*.hbs',
    'app/templates/*/*.hbs',
    'app/templates/*/*/*.hbs',
    ], ['templates']);
});

gulp.task('default', ['dependencies', 'watch']);
