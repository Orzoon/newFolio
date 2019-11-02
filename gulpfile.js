const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug')

function cssStyles(){
    return gulp.src('./scss/index.scss')
           .pipe(sass())
           .pipe(gulp.dest('./css'))
           .pipe(browserSync.stream());
}

function pugFiles(){
    return gulp.src('./pug/index.pug')
           .pipe(pug())
           .pipe(gulp.dest('./'))
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/*.scss', cssStyles)
    gulp.watch('./pug/*.pug', pugFiles)
    gulp.watch('index.html').on('change', browserSync.reload)
    gulp.watch('./js/*.js').on('change', browserSync.reload)
}

exports.cssStyles = cssStyles;
exports.pugFiles = pugFiles;
exports.watch = watch;