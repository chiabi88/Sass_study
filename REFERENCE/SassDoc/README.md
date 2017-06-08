# SassDoc

[SassDoc](http://sassdoc.com/)은 Sass 라이브러리/프레임워크 사용법(API: 변수, 함수, 믹스인 등)을 문서로 만들어 주는 자동화 도구
 SassDoc은 특정 구문 주석을 인식하여 데이터를 로드하여 테마에 맞춰 자동으로 HTML 문서를 만들어 준다.

## 설치

NPM을 사용하여 전역에 `sassdoc` 모듈 설치

```sh
$ npm install sassdoc -g
```

## SassDoc 주석

※ [주석설명](annotations.md)

SassDoc은 [JSDoc](http://usejsdoc.org/)에서 크게 영향을 받았다.  
문서화되어야 하는 각 항목(변수, 함수, 믹스인 등) 앞에 `///` 주석을 이용하여 정보를 제공(e.g `@author`, `@example`, ...) 한다.  

다음은 `$size` 믹스인에 SassDoc을 적용한 예이다.

```scss
/// 요소의 크기(width, height)를 한 줄로 설정하도록 도와주는 믹스인
///
/// @group shorthand
/// @author yamoo9
///
/// @param {Length} $width - 요소의 너비
/// @param {Length} $height [$width] - 요소의 높이
/// @output `width`, `height`
///
/// @example scss - `.demo` 요소 크기 설정
///   .demo {
///     @include size(12rem, 4rem);
///   }
/// @example sass - `.demo` 요소 크기 설정
///   .demo
///     +size(12rem, 4rem)

@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
```

SassDoc을 시작하는 첫 번째 행은 설명으로 시작한다. (다른 주석보다 먼저 나와야 한다)  
다음으로 [SassDoc의 주석(Annotations)](http://sassdoc.com/annotations/)을 참고하여 적절한 것을 추가한다.

주석(Annotation) | 설명(Description) | 별칭(Aliases)
--- | --- | ---
설명 범위 | 설명 범위 | -
설명 | 문서화 된 항목에 대한 설명 | -
[@access](annotations.md#access) | 접근 여부(공개, 비공개) | -
[@alias](annotations.md#alias) | 다른 항목의 별명 | -
[@author](annotations.md#author) | 작성자 | -
[@content](annotations.md#content) | 믹스인 내용 설명 | -
[@deprecated](annotations.md#deprecated) | 파기 예정 | -
[@example](annotations.md#example) | 예시 | -
[@group](annotations.md#group) | 그룹 설정 | -
[@ignore](annotations.md#ignore) | 무시 사항 | -
[@link](annotations.md#link) | 관련 링크 | @source
[@name](annotations.md#name) | 이름 | -
[@output](annotations.md#output) | 출력 사항 | -
[@parameter](annotations.md#parameter) | 믹스인 또는 함수의 매개변수 | @param, @arg, @argument
[@property](annotations.md#property) | 속성 | @prop
[@require](annotations.md#require) | 요구 사항 | @requires
[@return](annotations.md#return) | 함수 반환 값 | @returns
[@see](annotations.md#see) | 관련 자원 | -
[@since](annotations.md#since) | 변경 내역 | -
[@throw](annotations.md#throw) | 예외 사항 | @throws, @exception
[@todo](annotations.md#todo) | 관련된 작업 | -
[@type](annotations.md#type) | 변수 유형 | -


## SassDoc 실행

SassDoc 주석을 입력하는 과정이 마무리 되면 SassDoc을 실행하여 문서를 자동 생성한다.

```sh
$ sassdoc <src>... [options]

# 기본 사용법
$ sassdoc {Sass 디렉토리}

# 출력 폴더 지정
$ sassdoc {Sass 디렉토리} --dest {SassDoc 자동 생성 파일 디렉토리}

# 제외하고자 하는 항목이 있을 경우 설정
$ sassdoc stylesheets/ '!stylesheets/vendors/*'
```

※ [options](http://sassdoc.com/getting-started/#options)