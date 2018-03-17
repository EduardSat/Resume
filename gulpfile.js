const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

let postplugins = [autoprefixer];

gulp.task('styles', function () {

    return gulp.src('./source/styles/main.styl')
        .pipe(stylus() )
        .pipe(postcss(postplugins))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('pages', function () {

    return gulp.src('./source/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {

    gulp.watch(['./source/styles/main.styl', './source/**/*.styl'], ['styles'])
    gulp.watch('./source/**/*.pug', ['pages']);

});

gulp.task('default', ['styles', 'watch']);
gulp.task('default',['pages','watch']);
