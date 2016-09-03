/// <binding AfterBuild='sass' ProjectOpened='sass:watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var typescript = require('gulp-tsc');

var paths = {
    webroot: "./wwwroot/",
};

gulp.task('sass', function () {
    return gulp.src(paths.webroot + 'sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.webroot + 'css'));
});



gulp.task('sass:watch', function () {
    gulp.watch(paths.webroot + 'sass/**/*.scss', ['sass']);
});

gulp.task('copy:angular_dependencies', function () {
    gulp.src([
        './node_modules/core-js/client/shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/systemjs/dist/system.src.js',
    ])
    // Perform minification tasks, etc here
    .pipe(gulp.dest(paths.webroot + 'lib/angular_dependencies'));
});

gulp.task('copy:required_angular_modules', function () {
    gulp.src('./node_modules/@angular/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest(paths.webroot + 'node_modules/@angular/'));
});

gulp.task('copy:required_rxjs_modules', function () {
    gulp.src('./node_modules/rxjs/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest(paths.webroot + 'node_modules/rxjs/'));
});

