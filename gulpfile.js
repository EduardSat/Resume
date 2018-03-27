var  gulp = require('gulp'),
     stylus = require('gulp-stylus'),
     pug = require('gulp-pug'),
     autoprefixer = require('autoprefixer'),
     postcss = require('gulp-postcss'),
     browserSync = require('browser-sync');

let postplugins = [autoprefixer];

gulp.task('styles', function () {
    return gulp.src('./source/styles/main.styl')
        .pipe(stylus() )
        .pipe(postcss(postplugins))
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('pages', function () {

    return gulp.src('./source/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('browser-sync', function() {
    browserSync( {
        server: {
            baseDir: 'public'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync','styles'], function () {

    gulp.watch(['./source/styles/main.styl', './source/**/*.styl'], ['styles'])
    gulp.watch('./source/**/*.pug', ['pages']);

});

gulp.task('default', ['styles', 'watch']);
gulp.task('default',['pages','watch']);
