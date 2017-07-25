// Modules 호출
var gulp = require('gulp'),

/**
 * ========================
 * gulp 패키지 모듈 호출
 * =======================
 */
    // sass, css 관련
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc'),
    
    // 스프라이트 생성 모듈
    spritesmith  = require('gulp.spritesmith'),

    // 유틸리티
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge-stream'),

    // Browser 서버/싱크 
	  browserSync  = require('browser-sync'),
	  reload = browserSync.reload;

/**
 * ========================
 * path : 경로 담을 객체
 * =======================
 */
var src = 'project/src';
var dist = 'project/dist';
var path = {
  js: src + 'js/**/*.js',
  scss: src + 'stylesheets/**/*.scss',
  images: src + 'images/**/*'
};

/**
 * ========================
 * config
 * =======================
 */
var config = {
  // 옵션 : https://github.com/sass/node-sass#options
  'sass': {
    errLogToConsole: true,
    outputStyle: 'expanded'
  },
  // 옵션 : https://github.com/postcss/autoprefixer#options
  // 브라우저 리스트 참고 : https://github.com/ai/browserslist#queries
  'autoprefixer': {
    // 지원 브라우저 체크
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
  },
  'sassdoc': {
    dest: 'project/sassdoc/'
  },
  // Browser-sync
  // 옵션: http://www.browsersync.io/docs/options/
	'browserSync': { 
		'server'  : ['dist'],
		'port'    : 8080,
		'notify'  : false,
	}
}

/**
 * ========================
 * @task : sass compile & autoprefixer & sourcemaps
 * =======================
 */
gulp.task('sass', function() {
  return gulp.src(path.scss)
             .pipe(sourcemaps.init())
             .pipe(sass(config.sass).on('error', sass.logError))
             .pipe(autoprefixer(config.autoprefixer))
             .pipe(sourcemaps.write('./maps'))
             .pipe(gulp.dest(dist + '/css'))
             .pipe(reload({stream: true}));
});

gulp.task('sassdoc', function() {
  return gulp.src(path.scss)
             .pipe(sassdoc(sassdocOptions))
             .resume();
});

// 업무: images 디렉토리 dist 디렉토리 안으로 이동
gulp.task('images', function() {
	return gulp
			.src(path.images)
			.pipe( gulp.dest(dist + '/images') );
});

// 업무: 스프라이트 이미지 생성
gulp.task('sprite', function() {
	var spriteData = gulp
		.src(src + '/images/test/*.png')
		.pipe( spritesmith({
			'imgName' : 'sprite.png',
			'cssName' : '_sprite.scss'
		}) );

	// return spriteData.pipe( gulp.dest('dist') );

	var imgStream = spriteData.img.pipe(gulp.dest(dist + '/images'));
	var cssStream = spriteData.css.pipe(gulp.dest(src + '/stylesheets'));

	return merge(imgStream, cssStream);
});

// watch : 관찰할 업무 지정
gulp.task('watch', function() {
  gulp.watch(path.scss, ['sass']);
});


gulp.task('browserSync', ['sass'], function () { 
  return browserSync.init(config.browserSync);
});

// 'gulp'를 실행하면 sass, watch task를 실행함
gulp.task('default', ['browserSync','watch']);
