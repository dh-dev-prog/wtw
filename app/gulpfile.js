var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');

//Scripts task
//uglify
gulp.task('scripts', function(){
  gulp.src('module-list/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minjs'))
})

//Scripts task
//uglify
gulp.task('styles', function(){
  gulp.src('src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(livereload())
})

//Scripts task
//uglify
gulp.task('image', () =>
    gulp.src('src/image/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/compressed'))
);

//Watch task
//uglify
gulp.task('watch', function(){
  livereload({ start: true });﻿
  gulp.watch('module-list/*.js', ['scripts']);
  gulp.watch('src/scss/*.scss', ['styles']);
})

gulp.task('default', ['image', 'scripts', 'styles', 'watch'])
