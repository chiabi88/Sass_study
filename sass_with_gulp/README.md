# gulp

+ [gulp](http://gulpjs.com/)
+ [gulp github](https://github.com/gulpjs/gulp/blob/master/README.md)

## gulp의 특징**

+ 자동화 : 개발 워크 플로우에서 고통스럽거나 시간 소모적인 작업을 자동화하기 위한 툴킷이다.
+ platform-agnostic : 모든 주요 IDE에 통합되어 있으며 사람들은 PHP, .NET, Node.js, Java 및 기타 플랫폼에서 gulp를 사용한다.
+ 강력한 생태계 : npm모듈을 사용해 원하는 모든 작업을 수행 2000개 이상의 스트리밍 파일 변환을 위한 큐레이팅 된 플러그인을 보유한다.
+ simple : minimal API surface만을 제공함으로써 gulp는 쉽게 배우고 사용할 수 있다.

> **platform-agnostic**  
플랫폼에 구애받지 않는, 크로스 플랫폼  
[agnostic](http://whatis.techtarget.com/definition/agnostic)

### Sample `gulpfile.js`

```javascript
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'client/img/**/*'
};

// 모든 작업에 스트림을 사용해야하는 것은 아니다.
// gulpfile은 또 다른 node 프로그램이며 npm에서 사용가능한 패키지를 사용할 수 있다.
gulp.task('clean', function() {
  // 'gulp.src' 와 같이 여러 globbing 패턴을 사용할 수 있다.
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  // 소스 맵을 맨 아래로 두어 모든 자바스크립트를 축소하고 복사한다.(vendor scripts를 제외하고)
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// 모든 정적 이미지 복사하여
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // 옵션을 task에 전달한다.
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

// 파일이 변경되면 작업을 다시 실행한다.
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// default task는 cli에서 'gulp'를 실행할 때 호출된다.
gulp.task('default', ['watch', 'scripts', 'images']);
```

## Getting Start

※ 이전에 전역적으로 gulp를 설치한 경우 `npm rm --global gulp`를 먼저 실행하라.

Node와 npm 설치가 선행되어야 한다.
```
node --version
npm --version
```

**`gulp`** command를 전역적으로 설치한다.
```
npm install --global gulp-cli
```

**`package.json`** 을 생성해서 **`gulp`** 를 devDependencies에 설치한다.
```
npm install --save-dev gulp
```

프로젝트 디렉토리에 **`gulpfile.js`** 를 생성한뒤 다음 내용을 작성한다. 
```javascript
var gulp = require('gulp');

gulp.task('default', function(){
  // 기본 task 코드를 작성한다.
});
```

프로젝트 디렉토리에서 작성한 **`gulp`** 명령어를 실행한다.
```
gulp
```

※ gulp의 default task는 아무것도 실행하지 않는다.
```
[16:40:48] Using gulpfile ~\Desktop\FDS\Sass_study\sass_with_gulp\gulpfile.js
[16:40:48] Starting 'default'...
[16:40:48] Finished 'default' after 59 μs
```

## gulp API

[gulp.src](#gulpsrcglobs-options) | [gulp.dest](#gulpdestpath-options) | [gulp.task](#gulptaskname--deps--fn) | [gulp.watch](#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb)

### gulp.src(globs[, options])

해당 task의 대상이 되는 파일들을 지정해주는 역할을 한다.   

주어진 `globs`또는 `globs 배열`과 일치하는 파일을 내보낸다.  
플러그인에 파이프 될 수 있는 [`Vinyl files`](https://github.com/gulpjs/vinyl-fs)의 stream을 반환한다.

```javascript
gulp.src('client/templates/*.jade')
  .pipe(jade())
  .pipe(minify())
  .pipe(gulp.dest('build/minified_templates'));
```

#### globs

+ Type: `String` or `Array`

파일을 선택하는 방식은 [node-glob](https://github.com/isaacs/node-glob/)의 문법을 따른다.  
!로 시작하는 glob와 일치하는 파일을 glob 결과에서 해당 지점까지 제외한다.

```
client/
  a.js
  bob.js
  bad.js
```
위 디렉토리 구조에서 a.js, bad.js만 일치시키는 표현식은
```javascript
gulp.src(['client/*.js', '!client/b*.js', 'client/bad.js'])
```

#### options

+ Type: `Object`

glob-stream을 통해 [node-glob](https://github.com/isaacs/node-glob)에 전달할 옵션.  
gulp는 `ignore`를 제외하고 [node-glob이 지원하는 모든 옵션](https://github.com/isaacs/node-glob#options)과 [glob-stream](https://github.com/gulpjs/glob-stream)을 지원하며 다음 옵션을 추가한다.

### gulp.dest(path[, options])

해당 task의 결과물이 저장될 경로를 지정한다.

### gulp.task(name [, deps] [, fn])

새로운 gulp task를 등록해주는 역할을 한다.  
가장 기본적인 형태에서는 첫번째 parameter에 task 이름, 두번째 parameter에 실제 작업할 내용의 함수가 위치하게 된다.

### gulp.watch(glob [, opts], tasks) or gulp.watch(glob [, opts, cb])

파일에 변경이 있을 때마다 변경을 감지해서 task를 실행할 수 있는 기능이다.
## .pipe()

Node.js의 pipe() 메서드를 사용해 gulp에서는 여러 작업을 함께 연결할 수 있다. 
pipe를 사용해 task의 결과물들을 function들에게 전달해 줄 수 있다.

gulp.src에서 대상으로 지정된 각 파일들을 stream 형태로 읽어들여서 다음으로 거쳐야할 플러그인 등으로 연결할 때 사용하게 된다. 

node.js stream의 pipe와 같다.

```javascript
gulp.task('sass', function() {
  return gulp.src('project/src/stylesheets/**/*.scss')
             .pipe(sourcemaps.init())
             .pipe(sass().on('error', sass.logError))
             .pipe(sourcemaps.write('../maps'))
             .pipe(autoprefixer())
             .pipe(gulp.dest('project/dist/css'))
});
```
위 예제에서 gulp는 `sourcemaps`, `sass`, `autoprefixer`를 사용한다.  
gulp는 'project/src/stylesheets/'폴더의 모든 scss파일을 긁어온다.  
그런 다음에 이것을 `sourcemaps`에게로 파이핑(piping)해주게 되는데 `sourcemaps`는 `gulp-sourcemaps`을 초기화한다.  
그 다은 `sass`로 파이핑 해주는데 `sass`는 scss파일을 컴파일 하고 오류시에 스트림을 끊는 대신 스트리밍 오류를 출력한다.  
그 후에 `sourcemaps`으로 다시 파이핑해 맵 파일을 '../maps' 폴더에 출력한다.  
그 다음 `autoprefixer`로 파이핑해 컴파일 된 css파일에 후처리를 진행한다.  
이 파일은 최종적으로 `gulp.dest()`로 보내지는데, 이를 통해 실제 사용하게될 output 파일이 'project/dist/css' 폴더에 담겨진다. 

![gulp pipe](../asset/img_gulp_pipe.png)  
<sup>출처 : https://www.codeproject.com/Articles/1064203/WebControls/</sup>

> **[readable.pipe()](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)**  
`readable.pipe()` 메서드는 `Writable` 스트림을 읽을 수있는 곳에 첨부하여 자동으로 플로팅 모드로 전환하고 모든 데이터를 첨부 된 `Writable`으로 푸시합니다. 데이터의 흐름이 자동으로 관리되어 `Writable` 스트림이 더 빠르게 읽을 수있는 스트림에 의해 덮혀지지 않도록 한다.

> **[Node Stream](https://nodejs.org/api/stream.html#stream_stream)**  
스트림은 Node.js에서 스트리밍 데이터로 작업하기위한 추상 인터페이스이다.   
스트림 모듈은 스트림 인터페이스를 구현하는 객체를 쉽게 만들 수있는 기본 API를 제공한다.  
Node.js에서 제공하는 많은 스트림 객체가 있다.   
예를 들어, `request to an HTTP server`와 `process.stdout`은 모두 스트림 인스턴스이다.  
스트림은 읽기, 쓰기 또는 둘 다 가능하다. 모든 스트림은 `EventEmitter`의 인스턴스이다.

***

## [Grunt](https://gruntjs.com/)

The JavaScript Task Runner

```javascript
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

## gulp vs Grunt

![gulp vs Grunt](../asset/img_gulp_grunt.png)  
<sup>출처 : https://habrahabr.ru/company/yandex/blog/239993/</sup>

**gulp**
```javascript
gulp.task('jpgs', function() {
    return gulp.src('src/images/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('optimized_images'));
});
```

**grunt**
```javascript
imagemin: {
    jpgs: {
        options: {
        progressive: true
        },
        files: [{
            expand: true,
            cwd: 'src/img',
            src: ['*.jpg'],
            dest: 'images/'
        }]
    }
}
```

***

+ [[Gulp.js] Gulp 입문 ① - Gulp에 대한 소개 | 감성 프로그래밍](http://programmingsummaries.tistory.com/356)
+ [왜 Grunt에서 Gulp로 갈아탔는가?](https://blog.outsider.ne.kr/1181)