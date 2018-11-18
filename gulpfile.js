var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./cssAndSass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./cssAndSass'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./cssAndSass/**/*.sass', ['sass']);
});