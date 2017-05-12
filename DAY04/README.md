# DAY04
(2017-05-)

## Sass Script

* [조건문](#1-조건문)
	+ [if()](#1-1-if)
	+ [@if](#1-2-if)
* [반복문](#2-반복문)
	+ [@for](#2-1-for)
	+ [@each](#2-2-each)
	+ [@while](#2-3-while)
* [함수](#3-함수)

### 1. 조건문

* [참조 : Sass-lang - Control Directives & Expressions](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions)

#### 1-1. if()

* 자바스크립트의 삼항식 조건문과 유사하다

##### 자바스크립트

> [조건문] ? [ture면 이 구문 실행] : [false면 이 구문 실행]
```javascript
// javascript
var type = 'ocean';

type === 'ocean' ? alert('blue') : alert('black');

// black
```

##### Sass
> if(condition, true, false)
```Sass
// Sass
if(true, 1px, 2px) => 1px
if(false, 1px, 2px) => 2px
```
##### if() 예제
```Sass
// SCSS
$type: ocean;

p {
  color: if($type == ocean, blue, black); // color: blue;
}

// main-bg 컬러에 따라 main의 텍스트 컬러값 지정
$main-bg: #000;

.main {
	color: if($main-bg == black, #fff, #000);
}
```

* compile
```css
p {
  color: blue;
}

.main {
  color: #fff;
}
```

#### 1-2. @if

* 자바스크립트의 'if ~ else' 조건문과 유사하다

##### 자바스크립트

> if (condition) { statement_1;} else if {statement_2;} else {statement_3;}
```javascript
// javascript
var type = 'monster'

if(type === 'ocean'){
	alert('blue');
} else if(type === 'matador') {
	alert('red');
} else if(type === 'monster') {
	alert('green');
} else {
	alert('black');
}

// green
```

##### Sass

> @if {}
```Sass
// SCSS
p {
  @if 1 + 1 == 2 { border: 1px solid;  }
  @if 5 < 3      { border: 2px dotted; }
  @if null       { border: 3px double; }
}
```

* compile
```css
p {
  border: 1px solid;
}
```

> @if {} @else if {} @else {}
```Sass
// SCSS
$type: monster;
p {
	@if $type == ocean {
		color: blue;
	} @else if $type == matador {
		color: red;
	} @else if $type == monster {
		color: green;
	} @else {
		color: black;
	}
}
```

* compile
```css
p {
  color: green;
}
```

* [참조 : Sass-guideline - 조건문](https://sass-guidelin.es/ko/#section-73)

***
### 2. 반복문

#### 2-1. @for

* 자바스크립트의 for문과 유사하다.

##### 자바스크립트

> for ([초기문]; [조건문]; [증감문]) 문장
```javascript
// javascript
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// 1
// 2
// 3
```

##### Sass

> @for [iteration] from ~ [through, to]
```Sass
// SCSS
@for $i from 1 through 3 {
	.item-#{$i} { width: 2em * $i;}
}
// from to : 1부터 3전 까지(3을 포함하지 않음)
// from through : 1부터 3까지(3을 포함)
```

* compile
```css
.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}

.item-3 {
  width: 6em;
}
```
#### 2-2. @each

* 자바스크립트의 for_in문, forEach문과 유사하다.
* list, map의 요소에 대해 반복을 실시한다.

##### 자바스크립트

> for ( 변수 in 객체 ) { 문장 }
```javascript
// javascript
var car = {
	make: 'Ford',
	model: 'Mustang'
}
for (var i in car) {
	console.log(i + " => " + car[i]);
}

// make => Ford
// model => Mustang
```

##### Sass

> @each [iteration] in ~ [list, map]

> @each [iteration] in list
```Sass
// SCSS
$animal-image: puma, sea-slug, egret, salamander;

@each $animal in $animal-image {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

* compile
```css
.puma-icon {
  background-image: url("/images/puma.png");
}

.sea-slug-icon {
  background-image: url("/images/sea-slug.png");
}

.egret-icon {
  background-image: url("/images/egret.png");
}

.salamander-icon {
  background-image: url("/images/salamander.png");
}
```

> @each [iteration] in 다중 리스트(리스트 안의 리스트)
```Sass
// SCSS
$animal-image-multi-list: (puma, black, default), (sea-slug, blue, pointer), (egret, white, move);

@each $animal, $color, $cursor in $animal-image-multi-list {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}
```

* compile
```css
.puma-icon {
  background-image: url("/images/puma.png");
  border: 2px solid black;
  cursor: default;
}

.sea-slug-icon {
  background-image: url("/images/sea-slug.png");
  border: 2px solid blue;
  cursor: pointer;
}

.egret-icon {
  background-image: url("/images/egret.png");
  border: 2px solid white;
  cursor: move;
}
```

> @each [iteration] in map
```Sass
// SCSS
$headline-size: (
  h1: 2em,
  h2: 1.5em,
  h3: 1.2em
);

@each $header, $size in $headline-size {
  #{$header} {
    font-size: $size;
  }
}
```

* compile
```css
h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}
```

#### 2-3. @while

* 자바스크립트의 while문과 유사하다

##### 자바스크립트

> while (조건문) 문장
```javascript
// javascript
n = 0;
x = 0;

while (n < 3) {
	n++; // 무한 루프를 피하기 위함
	x += n;
}

// 6
/* 
 첫번째 경과 후: n = 1 and x = 1
 두번째 경과 후: n = 2 and x = 3
 세번째 경과 후: n = 3 and x = 6
 */
```

##### Sass

> 
```Sass
// SCSS
$i: 6;

@while $i > 0 {
	.item-#{$i} { width: 2em * $i; }
	$i: $i - 2
}
```

* compile
```css
.item-6 {
  width: 12em;
}

.item-4 {
  width: 8em;
}

.item-2 {
  width: 4em;
}
```

* [참조 : Sass-guideline - 반복문](https://sass-guidelin.es/ko/#section-74)

***

### 3. 함수

* [내장함수](Functions.md)
* [참조 : Sass-lang - Function Directives](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_9#function_directives)

#### 사용자 정의 함수

Function은 mixin과 유사하나 리턴값에 차이가 있다, 자바스크립트의 함수와 거의 흡사

* mixin: style markup 리턴
* function: @return directive를 통하여 값을 리턴

```Sass
// SCSS
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar {
  width: grid-width(5);
}
```

* compile
```css
#sidebar {
  width: 240px;
}
```

***

* ~[참조: 믹스인, 함수 가변인자 보충](Arglist.md)~