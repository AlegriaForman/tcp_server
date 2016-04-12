'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['/*.js'];

gulp.task('lint:test', () => {
  gulp.src('./test/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha:test', () => {
  return gulp.src('./test/*.js')
    .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch('./test/*.js', ['lint:test', 'mochaTest']);
  gulp.watch(files, ['lint:nontest', 'mochaTest']);
});

gulp.task('lint', ['lint:test', 'lint:nontest']);
gulp.task('mochaTest', ['mocha:test']);
gulp.task('default', ['lint', 'mochaTest', 'watch']);
