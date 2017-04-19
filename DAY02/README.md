# DAY02
(2017-04-10)

* [Ruby Sass, Node Sass 설치 & 명령어](sass.md)
* [npm 로컬 설치, 전역설치](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/)
	+ npm install 명령어 설치 옵션 :  
		- <strong>지역(local)</strong><br/>
		옵션을 별도로 지정하지 않을 경우, 프로젝트 디렉터리 내에 Node_modules 디렉터리가 자동 생성 그 안에 설치한 패키지가 설치됨
		지역으로 설치된 패키지는 해당 프로젝트 내에서만 사용가능
		- <strong>전역(global)</strong><br/>
		-g 옵션을 지정한다. 

	+ 전역에 설치한 패키지 위치
		- macOS :  /usr/local/lib/node_modules <br/>
		- 윈도우  :  c:\Users\%USERNAME%\AppData\Roaming\npm\node_modules
	+ 전역으로 설치된 패키지는 전역에서 참조가 가능하다 <br/>
	ex) npm의 경우 모든 프로젝트가 사용하기 때문에 지역으로 설치하는 것보다 전역에 설치하는 것이 일반적

	+ [참조 : 슬쩍 떠보는 npm과 package.json](https://elegantcoder.com/beginning-npm-package/)

* [@extend 보다 믹스인을 사용하자](extend.md)
* 웹 상에서 Sass를 css로 컴파일해주는 웹서비스 : [Sassmeister](http://www.sassmeister.com/)

***

## Sass Script

* [참조](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0203.md)
	+ [!optional](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0203.md#optional)
	+ [대체 선택자: % (placeholder selector)](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0203.md#대체-선택자--placeholder-selector)
	+ [호출제어](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0203.md#호출-제어)
	+ [중첩 @import](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0203.md#중첩-import-nested-import)
	+ [Sass Script](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0203.md#sass-script)
		- 변수 : 변수선언, 전역변수 & 지역변수, !global, !default
* [참조](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0206.md)
	+ 데이터 타입, 연산, 믹스인

### 변수

#### 변수 선언

* Sass

`$` 를 사용해서 변수 선언

```sass 
$base-font-size: 16px
$base-line-height: 1.4
$type-scale: 1.618

body
	font-size: $base-font-size
```

* SCSS

```sass
$base-font-size: 16px;
$base-line-height: 1.4;
$type-scale: 1.618;

body {
	font-size: $base-font-size;
}
```

* Javascript
`var`로 선언 (선언되지 않은 변수들은 항상 전역변수)

```javascript
var a = 1;
var b;
b = 'javascript';
```
#### 전역변수 & 지역변수

* Sass

`$` 를 사용해서 변수 선언

```sass 
$base-font-size: 16px

body
	$base-font-size: 12px
	font-size: $base-font-size // 12px
a
	font-size: $base-font-size // 16px
```

* SCSS

```sass
$base-font-size: 16px;
$base-line-height: 1.4;
$type-scale: 1.618;

body {
	$base-font-size: 12px;
	font-size: $base-font-size; // 12px
}
a {

	font-size: $base-font-size; // 16px
}
```

* Javascript

```javascript
var a = 1; // 전역 변수
var b;
b = 'javascript';
console.log(a, b);
function f() {
	a = 3; 			// 존재하는 전역 a에 3을 할당
	var c = 2; 		// 함수 f 안에서 지역변수로 선언, 2를 할당
	e = 5;			// 새로운 전역 e를 생성하고 5를 할당
	console.log(a, b, c, e);
}
f();
console.log(a, b, e); // e는 전역변수라 출력 됨
console.log(c); // Uncaught ReferenceError: c is not defined
```

#### !global

지역 내 선언한 변수를 전역적으로 사용하고 싶을 때 사용하는 <strong>플래그</strong>

```sass
$base-font-size: 12px

body
	font-size: $base-font-size // 12px
	$base-font-size: 16px !global
a
	font-size: $base-font-size // 16px
```

#### ※ 믹스인에서의 !global 쓰임

* Sass

```sass
$color: yellow

=color_mixin($color: $color)
	color: $color
	$color: purple !global
	color: $color

.block1
	+color_mixin

.block2
	color: $color
```

* SCSS

```sass
$color: yellow;

@mixin color_mixin($color: $color){
	color: $color;
	$color: purple !global;
	color: $color;
}

.block1 {
	@include color_mixin;
}
.block2 {
	color: $color;
}
```

* CSS

```css
.block1 {
  color: yellow;
  color: yellow;
}

.block2 {
  color: purple;
}

```

#### !default

기본 값으로 설정하는 <strong>플래그</strong><br>
우선순위가 제일 마지막, 변수의 값이 변경될 경우 변경된 값이 적용됨 <br>
해당 변수가 설정되지 않았거나 값이 null일때 값을 설정

```sass
$base-font-size: 16px
$base-font-size: 12px !default

body
	font-size: $base-font-size // 16px
```

#### ※ 믹스인에서의 !default 쓰임

* Sass

```sass
$text-color: blue

=text-color
	$text-color: red !default
	color: $text-color

.error
	+text-color // blue, 만약 믹스인 안에 !default가 없다면 red
```

* SCSS

```sass
$text-color: blue;

@mixin text-color {
	$text-color: red !default;
	color: $text-color;
}

.error {
	@include text-color; // blue, 만약 믹스인 안에 !default가 없다면 red
}
```

* CSS

```css
.error {
  color: blue;
}
```

***

## 데이터 타입(Data Type)

6가지 데이터형을 지원함(Null, Number, String & Color, Boolean, Lists, Map)

1. Null (값이 없음)

	null

2. Number (숫자형)

	1.2, 3, 14px
	
	[참조 : Number Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#number_functions)
3. String & Color (문자형)

	+ "../images/icon.jpg"
	+ 'Times New Roman' | Verdana
	+ lightblue | #fe4940 | rgba(255, 255, 255, 0.5) | hsla(260, 100%, 0%, 0.5)

	[참조 : String Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#string_functions)
4. Boolean (논리형 : 참, 거짓)
	
	true, false

5. Lists ( 공백, 콤마(,)로 구분되는 목록 (자바스크립트 <em>배열</em>과 유사))
	+ 0 10px 20px 40px
	+ 2px solid gray
	+ Helvertica, Sans serif

	[참조 : List Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#list-functions)

6. map ( 키:값으로 구성된 그룹 (자바스크립트 <em>객체</em>와 유사))

	$map: (key1: value, key2: value2)

	[참조 : Map Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#map-functions)

***

## 연산(Operations)

1. 사칙연산

	+, -, *, /, %

2. 비교연산

	>, <, >=, <=, ==, !=

3. 문자연산

	문자와 문자를 접합하려는 경우 + 연산자를 사용

4. 보간법 ( #{}, Interpolation )

	변수를 ""내부에서 처리할 수 있도록 함

5. 컬러연산
	
	color의 hex코드도 사칙연산이 가능함

```sass
p {
	color: #010203 + #040506;
}

01 + 04 = 05
02 + 05 = 07
03 + 06 = 09
------------
#050709
```

6. 기타연산

	+ Boolean 데이터 연산을 사용할 수 있음 (and, or, not)
	+ 리스트 연산 미지원
	+ 배열 객체의 length,join 등 지원 가능

```sass
$age:20;
.bool {
   @if ($age > 10 and $age < 25) {
      color: green;
   }
}
```

#### Sass 컴파일 결과 출력 창에 '디버깅', '워닝', '에러'를 콘솔에 출력하는 지시어(Directive)

* @debug
* @warn
* @error