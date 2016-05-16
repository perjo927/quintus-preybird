'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var appRoot = "./app/";
var distPath = "./dist/";

var staticFiles = [
    appRoot + "**/*.js",
    appRoot +  "**/*.css",
    appRoot + "**/*.html"
];

gulp.task('release', function () {
    return gulp.src(staticFiles).pipe(gulp.dest(distPath));
});

gulp.task('sass', function () {
    return gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/**/*.scss', gulp.parallel('sass'));
});