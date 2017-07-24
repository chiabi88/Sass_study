var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var src = './src/stylesheets/*.scss';
var dist = './dist/css';

gulp.task('sass', function() {
  return gulp.src(src)
             .pipe(sourcemaps.init())
             .pipe(sass(sassOptions).on('error', sass.logError))
             .pipe(sourcemaps.write('../maps'))
             .pipe(gulp.dest(dist));
});