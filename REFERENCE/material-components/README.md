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

### 1-4. 컴포넌트 인클루딩

#### JavaScript

Webpack또는 SystemJS와 모듈 로더를 사용하여 JS 모듈을 로드하는 경우 필요한 모든 컴포넌트를  
matreial-components-web에서 가져와서 그대로 사용할 수 있다.

자세한 내용은 필요시에 [링크를 참고](https://github.com/material-components/material-components-web#javascript) 

#### CSS

스타일을 포함하는 모든 컴포넌트는 dist / mdc.COMPONENT.css에서 제공되며  
dist / mdc.COMPONENT.min.css의 보완 된 축소 버전도 제공

각 컴포넌트에는 애플리케이션의 Sass에 포함 시킬 수 있는 Sass 소스 파일이 함께 제공 됨.

```scss
// 전체 라이브러리를 사용할 경우
@import "material-components-web/material-components-web";

// 개별적으로 컴포넌트 / 믹스인을 사용할 경우
@import '@material/checkbox';
@import '@material/typography';
@import '@material/elevation/mixins'; // Mixins for elevation.
```

### 1-5. 데모 실행

repo(repository) 설정

```sh
git clone https://github.com/material-components/material-components-web.git && cd material-compontents-web

npm i
```

개발 서버 실행

```sh
npm run dev
```

http://localhost:8080 열기

## 2. Building project

[참조](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md)

## 3. 브라우저 지원

+ Chrome
+ Safari
+ Firefox
+ **IE 11** / Edge
+ Opera
+ Mobile Safari
+ Chrome on Android

***

#### 기타 참고

* [구글 머티리얼 디자인 소개](http://davidlab.net/google-design-ko/material-design/introduction.html#introduction-principles)

***

## 추가글

### 1. package.json

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

### 2. npm install (alias : npm i)

[npm-install](https://docs.npmjs.com/cli/install)

```sh
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>
```

#### 2-1. npm install (in package directory, no arguments)

기본적으로 package.json에 의존성으로 나열된 모든 모듈을 로컬 node_modules 폴더에 설치

(-g, --global 옵션을 명령에 추가한) 전역모드에서는 현재 패키지 컨텍스트를 전역 패키지로 설치함

#### 2-2. npm install [<@scope>/]<name>

대부분의 경우 npm 레지스트리에 최신으로 태그가 지정된 모듈 버전을 설치함

npm install을 지정된 패키지를 기본적으로 **dependencies** 에 저장함

`<scope>`는 선택사항, 패키지는 지정된 범위와 연결된 레지스트리에서 다운로드 됨

```sh
npm install gulp-cli
npm install node-sass --save-dev
npm install @material/checkbox
```
