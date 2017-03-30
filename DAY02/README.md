# DAY02
(2017-04-03)

* [Ruby Sass, Node Sass 설치 & 명령어](https://github.com/chiabi88/Sass_study/tree/master/DAY02/sass.md)
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

***

## Sass Script

* [참조](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0203.md)
	+ [!optional](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0203.md#optional)
	+ [대체 선택자: % (placeholder selector)](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0203.md#대체-선택자--placeholder-selector)
	+ [호출제어](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0203.md#호출-제어)
	+ [중첩 @import](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0203.md#중첩-import-nested-import)
	+ [Sass Script](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0203.md#sass-script)
		- 변수 : 변수선언, 전역변수 & 지역변수, !global, !default
* [참조](https://github.com/yamoo9/FDS/blob/3rd_FDS/LECTURE/README/0206.md)
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
$base-font-size: 16px
$base-line-height: 1.4
$type-scale: 1.618

body {
	font-size: $base-font-size
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
$base-font-size: 16px
$base-line-height: 1.4
$type-scale: 1.618

body {
	$base-font-size: 12px
	font-size: $base-font-size // 12px
}
a {

	font-size: $base-font-size // 16px
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
#### !default

기본 값으로 설정하는 <strong>플래그</strong>
우선순위가 제일 마지막, 변수의 값이 변경될 경우 변경된 값이 적용됨
```sass
$base-font-size: 16px
$base-font-size: 12px !default

body
	font-size: $base-font-size // 16px
```
***




