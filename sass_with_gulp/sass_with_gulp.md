+ [gulp-sass](https://www.npmjs.com/package/gulp-sass)
  - [A Simple Gulp’y Workflow For Sass](https://www.sitepoint.com/simple-gulpy-workflow-sass/)
  - [Gulp 사용법 #4 (gulp-sass, gulp-sourcemaps)](http://webclub.tistory.com/470)
+ [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
+ [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith)
  - [[걸프(Gulp)] 5. gulp.spritesmith (이미지스프라이트 만들기)](http://recoveryman.tistory.com/301)
+ [Browsersync](https://browsersync.io/docs/gulp)
  - [Gulp 사용법 #6 (Browser-sync)](http://webclub.tistory.com/473)
  - [크로스 브라우저 테스트에 편리한 Browsersync](https://blog.outsider.ne.kr/1216)
+ [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
  - [[Gulp] gulp-uglify option](http://witinweb.com/post/123625188342/gulp-gulp-uglify-option)
+ [gulp-concat](https://www.npmjs.com/package/gulp-concat)
+ [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
+ [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
+ [gulp-rename](https://www.npmjs.com/package/gulp-rename)
+ [del](https://www.npmjs.com/package/del)

### 프로젝트 파일 구조

```
node_modules/
project/
    src/
        js/
        stylesheet/
            *.css / *.scss / *.sass
        images/
            sprites/
            *.png / *.svg / *.jpg...
        html/
    dist/
        js/
        css/
        images/
            sprites/
        html/
sassdoc/
gulpfile.js
package.json
```

@ gulp sassdoc parse Error로 html 파일 출력안되는 오류 수정 :  
package.json에 author, bug, repository등 정보 입력하고 sassdoc options에 `verbose: true` 지정했더니 수정됨