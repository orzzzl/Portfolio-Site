var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat-css'),
    uglify = require('gulp-mini-css');


gulp.task('default', function() {
	gulp.src('css/*.css')
		.pipe(concat('dist/bundled.css'))
		.pipe(uglify())
		.pipe(rename('final.min.css'))
		.pipe(gulp.dest('dist/'))
});