# Material components for web

Google 엔지니어와 UX 디자이너 팀이 개발한 컴포넌트,  
신뢰할 수 있는 개발 워크 플로우를 통해 아름답고 기능적인 웹 프로젝트를 구축  

[Material Design Lite](https://getmdl.io/) 의 후속 제품

* [Material Design](https://material.io/)
* [Material Components Catalog](https://material-components-web.appspot.com/)
* [github : Material Components web](https://github.com/material-components/material-components-web)

## 1. Getting Started

### 1-1. Quick Start

프로젝트 폴더에 material-componets-web 노드 모듈(라이브러리) 설치

```sh
npm install --save material-components-web
```

html을 작성하고 css파일 링크를 걸고,  `<script>`태그 안에 `mdc.autoInit()`을 호출한다.

```html
<!DOCTYPE html>
<html class="mdc-typography">
  <head>
    <title>Material Components for the web</title>
    <link rel="stylesheet" href="node_modules/material-components-web/dist/material-components-web.css">
  </head>
  <body>
    <h2 class="mdc-typography--display2">Hello, Material Components!</h2>
    <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
      <input type="text" class="mdc-textfield__input" id="demo-input">
      <label for="demo-input" class="mdc-textfield__label">Tell us how you feel!</label>
    </div>
    <script src="node_modules/material-components-web/dist/material-components-web.js"></script>
    <script>mdc.autoInit()</script>
  </body>
</html>
```

### 1-3. 개별 구성요소 설치

MDC-Web은 모듈 방식으로 설계되어있다. 각 컴포넌트는 [@material npm org](https://www.npmjs.com/org/material) 하위 패키지로 구성 됨.

```sh
npm install --save @material/button @material/card @material/textfield @material/typography
```

모든 컴포넌트는 [package](https://github.com/material-components/material-components-web/tree/master/packages) 디렉토리에서 찾을 수 있다.  
각각 설치 및 사용법을 설명한 READEME 문서가 있음

### 1-2. Building project

프로젝트 설정

[참조](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md)


***

#### 기타 참고

* [구글 머티리얼 디자인 소개](http://davidlab.net/google-design-ko/material-design/introduction.html#introduction-principles)

***

### 추가글

#### package.json 의존성 명시

package.json 에는 프로젝트가 의존하고 있는 다른 프로젝트를 명시할 수 있다.  
테스트 관련 모듈이나 트랜스 파일러 간련 모듈 등 운영이 아닌 프로젝트를 개발하거나 테스트할 때만 필요한 패키지들만 따로 명시해 (devDependencies로) 설치한다.

```sh
npm install <패키지이름|패키지외부URL> [--save-dev|--save]
```

* --save : 패키지를 설치하고 package.json 의 dependencies 항목에 설치한 패키지의 이름과 버전을 명시

```json
  "dependencies": {
    "material-components-web": "^0.13.0"
  }
```

* --save-dev : 패키지를 설치하고 package.json 의 devDependencies 항목에 설치한 패키지의 이름과 버전을 명시

```json
  "devDependencies": {
    "autoprefixer": "^7.0.0",
    "babel-core": "^6.22.1",
    "json-loader": "^0.5.4",
    "node-sass": "^4.0.0",
    "mkdirp": "^0.5.1",
    "webpack": "^2.2.1"
  }
```

`^[version정보]` 는 명시한 version과 호환되는 것을 의미 자세한 것은 [semver](https://docs.npmjs.com/misc/semver) 참고

#### package.json의 scripts

"scripts" 는 패키지의 생명주기 중 다양한 타이밍에서 실행되는 script 명령들을 포함하고 있는 사전,  
키는 이벤트이고, 값은 이때 실행될 커맨드이다.

```json
  "scripts": {
    "build": "mkdirp build && webpack --progress --colors"
  }
```

mkdirp (mkdir -p 와 같이 동작 : 부모 디렉토리를 생성함)로 상위에 build 디렉토리를 만든 다음에  
webpack을 실행하는 데 컴파일 진행 상태를 표시할 거고 상태 표시를 컬러로 구분할 것임  
실행할 때는 `npm run build`로 실행한다.

[참고 : npm-scripts](https://docs.npmjs.com/misc/scripts)