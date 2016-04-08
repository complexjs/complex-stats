var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('complex', function() {
  return gulp.src([
     './lib/**/*.js',
    './src/**/*.js',
    ])
    .pipe(concat('complex-stats.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
    gulp.start('complex');
});
