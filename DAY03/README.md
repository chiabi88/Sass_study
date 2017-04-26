# DAY03
(2017-04-24)

## Sass Script

### 믹스인

자바스크립트 함수와 유사함 : 정의 시 사용하고 @include로 호출하여 재사용

> (.float-left와 같은 비의미론적 클래스에 의지하지 않고도) 스타일 시트 전체에서 재사용 할 수있는 스타일을 정의

* [참조 : Yamoo9 FDS](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0206.md#3-mixin)
* [참조 : Sass Doc](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins)
* [참조 : Sass Guideline](https://sass-guidelin.es/#mixins)
* [참조 : Sass Guideline 번역](https://sass-guidelin.es/ko/#mixins)

#### 믹스인 정의와 사용

> 믹스인 정의 : 믹스인 지시어(=, @mixin), 믹스인 이름, 선택적 인수, 믹스인 내용을 담는 블록으로 정의함

> 믹스인 사용 : 믹스인 지시어(+, @include), 믹스인 이름, 선택적 인수로 호출함

* Sass

```Sass
// 믹스인 정의
=boxsizing()
  box-sizing: border-box

// 믹스인 사용
body
  +boxsizing
```

* SCSS

```SCSS
// 믹스인 정의
@mixin boxsizing {
  box-sizing: border-box;
}

// 믹스인 사용
body {
  @include boxsizing;
}
```

* CSS Compile

```css
body {
  box-sizing: border-box;
}
```

> 믹스인은 선택자, 부모참조를 포함할 수 있다.

> 믹스인 이름 (및 다른 모든 Sass 식별자)은 관례적으로 '-'을 사용하며 '_'와 같이 교차 사용이 가능하다.

```SCSS
@mixin clear-fix {
  &:after{
    clear: both;
    display: block;
    content: '';
  }
}

.content {
  @include clear-fix;
}

.block {
  @include clear_fix;
}
```

* Compile

```css
.content:after {
  clear: both;
  display: block;
  content: '';
}

.block:after {
  clear: both;
  display: block;
  content: '';
}

```

> 믹스인은 속성을 직접 정의하거나 부모 참조를 사용하지 않고도 규칙 외부(문서의 루트)에 인클루드 될 수 있다. 

```SCSS
@mixin silly-links {
  a {
    color: blue;
    background-color: red;
  }
}

@include silly-links
```

* Compile

```css
a {
  color: blue;
  background-color: red;
}
```

> 믹스인은 다른 믹스인을 포함할 수 있다.

```SCSS
@mixin compound {
  @include highlighted-background;
  @include header-text;
}
@mixin highlighted-background {
  background-color: #fc0;
}
@mixin header-text {
  font-size: 20px;
}

.depth_1 {
  @include compound
}
```

* Compile

```css
.depth_1 {
  background-color: #fc0;
  font-size: 20px;
}
```

#### 믹스인 전달인자(Argument) : 믹스인 확장, 동적 믹스인

> Sass의 변수 형태로 전달인자를 작성한다. (콤마로 구분한다)

```SCSS
@mixin size($width, $height) {
  width: $width;
  height: $height;
}

div {
  @include size(100px, 100px)
}
```

* Compile

```css
div {
  width: 100px;
  height: 100px;
}
```

> 믹스인은 변수 설정 구문을 사용하여 인자에 기본값을 지정할 수도 있다.

```SCSS
@mixin size($width: null, $height: $width) {
  width: $width;
  height: $height;
}

.div_1 {
  @include size(200px);
}
.div_2 {
  @include size(100px, 200px);
}
```

* Compile

```css
.div_1 {
  width: 200px;
  height: 200px;
}

.div_2 {
  width: 100px;
  height: 200px;
}
```

> 믹스인은 특정 키워드를 지정해 믹스인에 인자 값을 전달할 수 있다. 

```SCSS
@mixin size($width: 200px, $height: 300px) {
  width: $width;
  height: $height;
}

.div_1 {
  @include size($width: 300px, $height: 300px);
}
.div_2 {
  @include size($height: 500px);
}
// 기본값이 있는 인자는 생략될 수 있다.
```

* Compile

```css
.div_1 {
  width: 300px;
  height: 300px;
}

.div_2 {
  width: 200px;
  height: 500px;
}
```

##### 가변 전달인자

> 고정된 숫자의 전달인자를 전달하는게 아니라 가변적 개수를 사용가능

> 호출시 전달 받을 인자 List를 '...'로 처리

```SCSS
@mixin transition($args...) {
  -webkit-transition: $args;
  -moz-transition: $args;
  transition: $args;
}

.tooltip__msg-box {
  @include transition(width 200ms, height 0.4s ease-out 0.2, background-color 0.1s linear);
}
```

* Compile

```css
.tooltip__msg-box {
  -webkit-transition: width 200ms, height 0.4s ease-out 0.2, background-color 0.1s linear;
  -moz-transition: width 200ms, height 0.4s ease-out 0.2, background-color 0.1s linear;
  transition: width 200ms, height 0.4s ease-out 0.2, background-color 0.1s linear;
}
```

> 믹스인 호출 시에도 가변인수를 사용할 수 있다.

> 리스트나 맵을 함수나 믹스인에 가변인자로 전달하여 일련의 인자로 구문을 분석할 수 있다.

```SCSS
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}

$value-map: (
  text: #ff0000, 
  background: #00ff00, 
  border: #0000ff
);
.secondary {
  @include colors($value-map...);
}
```

* Compile

```css
.primary {
  color: #ff0000;
  background-color: #00ff00;
  border-color: #0000ff;
}

.secondary {
  color: #ff0000;
  background-color: #00ff00;
  border-color: #0000ff;
}
```

#### 변수 범위와 컨텐츠 블록(@content)

> 믹스인에 전달 된 콘텐츠 블록은 믹스인이 아니라 블록이 정의 된 곳에 속한다. <br>
 즉, 믹스인의 로컬 변수는 전달 된 스타일 블록 내에서 사용할 수 없고 변수는 전역 값으로 해석된다.

예제 1.

```SCSS
$color: white;

@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}

.colors {
  @include colors { 
    color: $color; 
  }
}
```

* Compile

```css
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```

예제 2.

```SCSS
$query: max-width;
@mixin media-query($scope, $query: min-width) {
  @media screen and ($query: $scope) {
    @content;
    content: $query;
  }
}
.form {
  $form-width: 640px;
  width: $form-width;

  @include media-query($form-width - 10) {
    p::before{
      content: $query;
    }
  }
}
```

* Compile

```css
.form {
  width: 640px;
}
@media screen and (min-width: 630px) {
  .form {
    content: min-width;
  }
  .form p::before {
    content: max-width;
  }
}
```

#### 벤더 프리픽스

* 가능한 'autoprefixer' > 'compass, bourbon' > '직접 작성' 순으로 한다.
* autoprefixer는 항상 최신이다.
* Compass, bourbon 벤더 프리픽스 믹스인 모음을 제공한다. <br>
 (※ Compass는 LibSass와 호환이 되지 않는다 - [참조](https://sass-guidelin.es/ko/#compass))

***

#### 참고

* [autoprefixer](https://github.com/postcss/autoprefixer)
* [postCSS 소개](https://medium.com/@FourwingsY/postcss-%EC%86%8C%EA%B0%9C-727310aa6505)
* [bourbon](http://bourbon.io/)

##### CLL에서 autoprefixer 사용

```sh
npm install --global postcss-cli autoprefixer
postcss *.css --use autoprefixer -d build/
```

##### bourbon 사용

* [npm bourbon](https://www.npmjs.com/package/bourbon#installing-with-npm-and-using-a-node-based-asset-pipeline)

※ 선행) package.json

* dependencies에 (--save) 설치한다. ( 테스트, 개발 목적이라면 --save-dev )

```sh
// Command line

npm init --yes 
// (--yes, -y)는 package.json의 모든 값을 기본값으로 채워 생성하는 플래그

npm install --save bourbon
```

* Sass 파일에 import한다.

```Sass
@import "bourbon"
```

* --include-path옵션으로 bourbon 스타일 시트를 추가해야함
```sh
node-sass --include-path node_modules/bourbon/app/assets/stylesheets/ -w -r sass -o css --output-style expanded
```


