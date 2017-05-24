# Sassy Starter 리뷰

* [SassDoc](http://minamarkham.github.io/sassy-starter/docs/)
* [github](https://github.com/minamarkham/sassy-starter/)

[SMACSS](https://smacss.com/)(Scalable and Modular Architecture for CSS)<sup>[1](#user-content-1smacss)</sup>, [Atomic Design](http://atomicdesign.bradfrost.com/)<sup>[2](#user-content-2atomic-design)</sup> for Sass 프로젝트를 기반으로 한 스타터 툴킷

스타일은 다음 그룹으로 나뉨 :  
Base, Layout, Atoms, Molecules, Organisms, States, Themes, Utilities and Overrides

### 특징

- Live reloading with BrowserSync
- Image Minification
- Github Pages deployment
- Sass linting (based on default config)
- Autoprefixer configuration
- SMACSS and Atomic Design-based folder structure
- px to em, px to rem and other useful functions.
- Mixins for inlining media queries.
- Useful CSS helper classes.
- Default print styles, performance optimized.
- "Delete-key friendly." Easy to strip out parts you don't need.
- Includes:
- Normalize.css for CSS normalizations and common bug fixes
- CSS Pesticide for easy CSS debugging
- jQuery via CDN, with a local fallback
- Modernizr, via CDN, for feature detection
- Apache Server Configs that, among other, improve the web site's performance and security


***

* [SassDoc](http://sassdoc.com/)

##### <sup>[1]</sup>SMACSS
[←](#user-content-sassy-starter)  
대규모 프로젝트를 위한 스타일링 지침으로 스타일을 다섯가지로 분류하고, 각 유형에 맞는 선택자(selector)와 작명법(naming convention), 코딩 기법을 제시한다.

- 1. 기초(Base) : reset 스타일 류, 요소(elements) 스타일의 기본값 지정
- 2. 레이아웃(Layout) : 헤더, 푸터, 그리드 등
- 3. 모듈(Module) : 레이아웃 요소에 들어가는 더 작은 부분들(네비게이션 바, 말풍선, 대화상자, 위젯 등)
- 4. 상태(States) : 다른 스타일에 덧붗이거나 덮어 씌워서 상태를 나타냄(펼침과 접힘, 성공과 실패 등), 'is-'를 앞에 붙임
- 5. 테마(Theme) : 사용자가 테마를 선택할 수 있는 경우를 염두에 두고, 색상이나 이미지를 불변하는 스타일과 분리

##### <sup>[2]</sup>Atomic Design
[←](#user-content-sassy-starter)  
설계 시스템을 작성하는 다섯가지 수준으로 분류된 방법론
- 1. Atoms : 기본 빌딩 블록, 폼 레이블, 인풋, 버튼 같은 HTML 태그. 색상 팔레트, 글꼴, 애니메이션 요소
- 2. Molecules : 폼 레이블, 인풋, 버튼을 결합한 폼
- 3. Organisms : 서로 결합되어 비교적 복잡하고 뚜렷한 인터페이스 영역을 형성하는 분자 그룹
- 4. Templates
- 5. Pages
