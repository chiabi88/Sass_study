# DAY05
(2017-05-)

* [Sass Guideline : English 1.3](https://sass-guidelin.es/) 리뷰

#### 본문이 너무 길어서 안 읽은 분들을 위해
- [Too Long; Didn’t Read](https://sass-guidelin.es/#too-long-didnt-read)
- [너무 길어서 안 읽은 분들을 위해](https://sass-guidelin.es/ko/#section-84)

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

[(C/C++로 쓰인)LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)는 현재 오리지널 Ruby 버전과 거의 근접하게 호환한다. <br>
2014년에 Ruby Sass와 LibSass 팀은 두 버전간 동기화를 위해 기다리기로 하여, LibSass는 동기화를 위해 활발히 버전을 출시 중이다. <br>
일치 되지 않는 부분은 [Sass Compatibility](http://sass-compatibility.github.io/)에 정리되어 있다.

Ruby on Rails 프로젝트라면 Ruby Sass를 사용(LibSass를 선도함). <br>
비 Ruby 프로젝트일 경우 LibSass 사용. 만약 Node.js를 사용하고 싶다면 [node-sass](https://github.com/sass/node-sass)를 선택

* [참조 : Ruby Sass에서 LibSass로 전향하려는 사람들을 위한 아티클](https://www.sitepoint.com/switching-ruby-sass-libsass/)
### 2-2. Sass 또는 SCSS

Sass(전처리기)는 Sass, SCSS라는 두가지 구문을 제공하고 있다. <br>
처음에는 들여쓰기의 감지를 핵심 특성으로 갖는 Sass라는 구문을 제공했다가 CSS친화적인 SCSS구문을 제공하게 되었다. <br>
(※ Sass이다. SASS가 아니다.) <br>
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

기존 CSS 문법으로 작성된 것을 해석/처리해서 다시 일반 CSS로 돌려준다. (Autoprefixer가 가장 많이 애용 됨)<br>

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

일관성을 높이는 코드 가이드라인 - 읽고 업데이트하는 데에도 도움이 된다.
- 탭 대신 스페이스 두 칸 (2) 들여쓰기;
- 이상적인 행의 너비는 80 글자;
- 적절하게 쓰인 여러 행의 CSS 규칙;
- 공백의 의미 있는 사용.
```
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