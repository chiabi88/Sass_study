# Sass Guideline 리뷰

* [Sass Guideline : English 1.3](https://sass-guidelin.es/) 리뷰

#### 요약
- [Sass Guideline 요약](summary.md)

## 1. 저자 : Hugo Giraudel

- 저술한 Sass 관련 프로젝트
	+ [SassDoc](http://sassdoc.com/) : javascript의 [JSDoc](http://usejsdoc.org/) 같은 역할의 Sass 문서 작성 시스템 (디자인 된(커스텀도 가능한) 문서 형태)
	+ [SitePoint Sass Reference](https://www.sitepoint.com/sass-reference/) : Sass 참조 문서
	+ [Sass Compatibility](http://sass-compatibility.github.io/) : Sass 엔진 간의 비호환성 보고
- 저술한 책
	+ [CSS3 Pratique du Design Web](http://css3-pratique.fr/)
	+ Jump Start Sass

## 2. Sass에 대해

> Sass는 기초 언어에 힘과 우아함을 더하는 CSS의 확장이다

CSS를 완벽한 기능의 프로그래밍 언어로 바꾸는 것이 아니라, CSS의 부족한 부분을 개선하는 정도 

### 2-1. Ruby Sass 또는 LibSass

[(C/C++로 쓰인)LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)는 현재 오리지널 Ruby 버전과 거의 근접하게 호환한다.  
2014년에 Ruby Sass와 LibSass 팀은 두 버전간 동기화를 위해 기다리기로 하여,  
LibSass는 동기화를 위해 활발히 버전을 출시 중이다.  
일치 되지 않는 부분은 [Sass Compatibility](http://sass-compatibility.github.io/)에 정리되어 있다.

Ruby on Rails 프로젝트라면 Ruby Sass를 사용(LibSass를 선도함).  
비 Ruby 프로젝트일 경우 LibSass 사용. 만약 Node.js를 사용하고 싶다면 [node-sass](https://github.com/sass/node-sass)를 선택

* [참조 : Ruby Sass에서 LibSass로 전향하려는 사람들을 위한 아티클](https://www.sitepoint.com/switching-ruby-sass-libsass/)
### 2-2. Sass 또는 SCSS

Sass(전처리기)는 Sass, SCSS라는 두가지 구문을 제공하고 있다.  
처음에는 들여쓰기의 감지를 핵심 특성으로 갖는 Sass라는 구문을 제공했다가 CSS친화적인 SCSS구문을 제공하게 되었다.  
(※ Sass이다. SASS가 아니다.)  
동등한 기능을 갖기 때문에 선택은 미관상의 문제일 뿐이다.

* [참조 : Sass와 SCSS 차이점](http://www.sitepoint.com/whats-difference-sass-scss/)

### 2-3. 기타 전처리기들

#### 2-3-1. 전처리기 (Pre-Processor)

기존 CSS의 문법 확장, pares/compile 과정을 거쳐 일반 CSS로 되돌려 준다.

- Sass
- [Less](http://lesscss.org/) : 부트스트랩이라는 CSS 프레임 워크로 널리 알려진 Node.js 기반 전처리기
	+ [Bootstrap](https://v4-alpha.getbootstrap.com/)
- [Stylus](http://stylus-lang.com/) : 유연한 전처리기, 사용하기가 힘들고 사용 집단이 보다 적음

#### 2-3-2. Sass를 추천하는 이유

CSS에 대한 보수적인 접근방식
- 프로그래밍 언어처럼 만드는 것이 아니라 CSS가 미흡한 부분에서 CSS에 유용한 기능을 제공하는 것을 돕기 위한 소프트웨어임
- CSS 호환성에 대한 지원을 신경 쓰고 전반적인 동작들이 모두 일관성을 유지하도록 함

#### 2-3-3. 후처리기 (Post-Processor)

기존 CSS 문법으로 작성된 것을 해석/처리해서 다시 일반 CSS로 돌려준다. (Autoprefixer가 가장 많이 애용 됨)

- [PostCSS](https://github.com/postcss/postcss) : 'postprocessor'라로 불림. 스타일 시트의 '토큰'(셀렉터, 속성 및 값)에 액세스 할 수 있고, Javascript로 여러 종류의 작업을 수행하고 CSS에 결과를 컴파일 할 수 있다. 자바스크립트를 알아야 활용도가 높다.
	+ [Autoprefixer](https://github.com/postcss/autoprefixer) : PostCss로 구축된 인기있는 프리픽스 라이브러리
- [cssnext](http://cssnext.io/)

## 3. 서론

### 3-1. 왜 스타일 가이드가 필요한가

코드베이스를 깔끔하고 확장 사능하며 쉽게 관리할 수 있도록 유지하는 데 도움이 됨
크고, 유지 보수가 필요하고, 참여자가 많은 프로젝트일 수록 필요함

### 3-2. 이 글에서 기대하지 말아야 할 것

- 이것은 CSS 스타일 가이드가 아니다, 오직 Sass 관련 내용만을 다룬다.
- 개인적이고 치우친 견해로 만든 것, 조언정도로 생각할 것 (참고자료 확인)
- 유일한 방법이 아니므로 상황에 따라 적용할 것

### 3-3. 핵심 원칙

- Sass는 가능한 간단하게 유지한다
- [KISS 원칙(Keep It Simple Stupid)](https://en.wikipedia.org/wiki/KISS_principle) 이 핵심이며, 때에 따라 [DRY(Don't Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)원칙을 우선할 수도 있다. >> 코드를 반복하는 게 복잡한 것보다 나을 수 있다.
- 실용주의가 완벽함을 우선함 >> 여기에 설명된 규칙을 거스르더라도 타당하다면 그렇게 하라(코드는 목적이 아닌 수단)

### 3-4. 가이드라인 확장

스타일 가이드 확장 예 : [SassDoc repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md)
> 이것은 Felix Geisendörfer의 Node Styleguide를 확장 한 것. 이 문서의 내용은 노드 스타일 가이드의 내용보다 우선함

## 4. 구문 & 서식

일관성을 높이는 코드 가이드라인 >> 읽고 업데이트하는 데에도 도움이 된다.
- 탭 대신 스페이스 두 칸 (2) 들여쓰기;
- 이상적인 행의 너비는 80 글자;
- 적절하게 쓰인 여러 행의 CSS 규칙;
- 공백의 의미 있는 사용.
```Sass
// Yep
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

//Nope
.foo {
	display: block; overflow: hidden;

	padding: 0 1em; 
}
```

* [참조 : CSS Guideline](http://cssguidelin.es/#syntax-and-formatting)

### 4-1. 문자열

#### 4-1-1. 인코딩

문자 인코딩과 관련된 문제를 피하려면 @charset 지시문을 사용하여 주 스타일 시트에서 UTF-8인코딩을 강제 실행  
(※ 스타일 시트의 첫번째 요소여야 함)

```Sass
@charset 'utf-8';
```


#### 4-1-2. 따옴표

문자열에 따옴표를 감쌌는지는 CSS파서에 문제가 되지 않지만  
대부분의 언어들은 문자열이 따옴표에 둘러싸일 것을 요구하므로  
Sass 에서 문자열은 **언제나 작은 따옴표로(')로 감싸져야한다.**

- 따옴표로 묶지 않으면 색상 이름이 색상으로 처리됨
- 대부분의 구문 강조기는 따옴표 없는 문자열을 지원하지 못함
- 전반적인 가독성에 도움이 됨
- 문자열을 따옴표로 감싸지 않을 적절한 이유가 없음

```Sass
// Yep
$direction: 'left';

// Nope
$direction: left;
```

> CSS사양에 따라 @charset 지시어는 큰따옴표로 선언해야 유효하지만  
> Sass는 이를 CSS 컴파일 할 때 처리하므로 @charset에 대해서도 작은 따옴표를 사용하는 것이 안전하다.  
> ([The @charset Rule](https://www.w3.org/TR/css-syntax-3/#charset-rule))

#### 4-1-3. CSS값인 문자열

- CSS 값(CSS 식별자)로 사용될 문자열(initial, sans-serif...)에는 따옴표를 붙이지 않는다.
- 맵 키와 같은 Sass 자료 유형에 쓰일 문자열은 작은 따옴표를 붙인다.

```Sass
// Yep
$font-type: sans-serif;

//Nope
$font-type: 'sans-serif';

// Okay I guess
$font-type: unquote('sans-serif');
```

#### 4-1-4. 따옴표를 포함한 문자열

- 문자열이 하나 이상의 작은 따옴표를 포함하고 있다면 큰 따옴표(")로 문자열을 감싼다.  
(※과도한 문자 이스케이프 대신)

```Sass
// Okay
@warn 'You can\'t do that.';

// Okay
@warn "You can't do that.";
```

#### 4-1-5. URL

- URL도 위와 같은 이유로 따옴표로 묶여야 함
```Sass
// Yep
.foo {
  background-image: url('/images/kittens.jpg');
}
// Nope
.foo {
  background-image: url(/images/kittens.jpg);
}
```

### 4-2. 숫자

#### 4-2-1. 0(제로)

- 소수 앞의 0은 표기한다.
- 숫자 뒤에 0은 표기하지 않는다.

```Sass
// Yep
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.foo {
	padding: 2.0em;
	opacity: .5;
}
```

#### 4-2-2. 단위

- 길이를 다룰 때 0은 단위를 가지지 않는다.
- 숫자에 단위를 추가하려면 숫자에 1 단위를 곱해야한다.
- 단위를 문자열로 추가하는 것은 좋은 방법이 아니다. (결과물이 문자열이 됨)
- 값의 단위를 제거하려면 그 종류의 한 단위로 값을 나눠야한다.

```Sass
// Yep
$length1: 0;

// Nope
$length1: 0em;

// ---------------

$vaule: 42;

// Yep
$length2: $vaule * 1px;

// Nope
$length2: $vaule + px;

// ---------------

$length_vaule: 42px;

// Yep
$vaule_result: $length_vaule / 1px;

// Nope
$vaule_result: str-slice($length_vaule + unqoute(''), 1, 2);
```

* [참조 : Use lengths, not strings.](use_lengths.md)

#### 4-2-3. 연산

**최상위 숫자 계산은 항상 괄호로 감싸야 한다.**  
가독성을 향상시키고, Sass가 괄호 안의 수치를 계산하도록 강제하여 일부 예외적인 상황을 방지한다

```Sass
// Yep
.foo {
  width: (100% / 3);
}

// Nope 
.foo {
	width: 100% / 3;
}
```
#### 4-2-4. 매직 넘버

> "매직넘버" : 익명의 숫자 상수를 일컫는 [전통적인 프로그래밍 용어](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants)  
어쩌다 맞아떨어지지만 논리적 설명과 관련 없는 랜덤 숫자

**매직넘버는 전염병 같은 존재다 피해야한다.**  
만약 왜 작동하는지 합리적인 설명을 찾을 수 없을 경우 예상되는 이유를 충분히 주석을 달아둔다.  
설명이 없으면 다음 개발자는 아무런 사전 정보를 없이 그 값의 논리적인 이유을 알아내야 한다.

```Sass
/**
 * 1. 매직 넘버. `.foo`의 상단을 부모에 맞춰 정렬시키기 위해 찾은 값 중 가장
 * 낮은 값이다. 가능하다면, 적절하게 고쳐야 할 것.
 */
.foo {
	top: 0.327em; /* 1 */
}
```

* [참조 : 매직넘버에 대한 CSS-Tricks의 토픽](https://css-tricks.com/magic-numbers-in-css/)

### 4-3. 컬러

