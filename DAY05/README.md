# DAY05
(2017-05-)

* [Sass Guideline : English 1.3](https://sass-guidelin.es/) 리뷰

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
일치 되지 않는 부분은 [Sass Compatibility]((http://sass-compatibility.github.io/)에 정리되어 있다.

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

#### 2-3-1. 전처리기

- Sass
- [Less](http://lesscss.org/) : 부트스트랩이라는 CSS 프레임 워크로 널리 알려진 Node.js 기반 전처리기
	+ [Bootstrap](https://v4-alpha.getbootstrap.com/)
- [Stylus](http://stylus-lang.com/) : 유연한 전처리기, 사용하기가 힘들고 사용 집단이 보다 적음

#### 2-3-2. Sass를 추천하는 이유

CSS에 대한 보수적인 접근방식
- 프로그래밍 언어처럼 만드는 것이 아니라 CSS가 미흡한 부분에서 CSS에 유용한 기능을 제공하는 것을 돕기 위한 소프트웨어임
- CSS 호환성에 대한 지원을 신경 쓰고 전반적인 동작들이 모두 일관성을 유지하도록 함

#### 2-3-3. 후처리기