/// <binding AfterBuild='sass' ProjectOpened='sass:watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');


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

