var gulp = require('gulp');

// gulp 플러그인 호출
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sassdoc = require('sassdoc');

/**
 * ========================
 * 경로 담을 객체
 * =======================
 */
var src = 'project/src/';
var dist = 'project/dist/';
var path = {
  js: src + '/js/**/*.js',
  scss: src + '/stylesheets/**/*.scss'
};

/**
 * ========================
 * sass config
 * =======================
 */

// https://github.com/dlmanning/gulp-sass#options
// https://github.com/sass/node-sass#options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// https://github.com/postcss/autoprefixer#options
// https://github.com/ai/browserslist#queries
var autoprefixerOptions = {
  // 지원 브라우저 체크
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

// http://sassdoc.com/gulp/#drain-event
var sassdocOptions = {
  dest: 'project/sassdoc/'
};

/**
 * ========================
 * @task : sass compile & sourcemaps
 * =======================
 */
gulp.task('sass', function() {
  return gulp.src(path.scss)
             .pipe(sourcemaps.init())
             .pipe(sass(sassOptions).on('error', sass.logError))
             .pipe(sourcemaps.write('../maps'))
             .pipe(autoprefixer(autoprefixerOptions))
             .pipe(gulp.dest(dist + '/css'))
             .resume();
});

gulp.task('sassdoc', function() {
  return gulp.src(path.scss)
             .pipe(sassdoc(sassdocOptions))
             .resume();
});

// watch : 관찰할 업무 지정
gulp.task('watch', function() {
  gulp.watch(path.scss, ['sass']);
});

// 'gulp'를 실행하면 sass, watch task를 실행함
gulp.task('default', ['sassdoc', 'sass', 'watch']);
