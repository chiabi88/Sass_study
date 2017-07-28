## task runner? build tool? bundler??

빌드 도구는 작업(task)을 기반으로 실행되는 수동적인 도구라 할 수 있다.

**태스크 러너(Task Runner)** 는 프로그램 개발에 수반되는 반복적인 작업(Task)들을 스크립트로 작성해 한번에 실행 할 수 있게끔 도와주는 도구이다.

Task들을 순차적으로 배치하여, 마치 컴파일 언어의 빌드 과정처럼 구성할 수 있도록 돕는다.
소스코드 파일들의 변경을 감지하여, 그 때마다 자동으로 스크립트를 수행하게 할 수 있다.

+ **gulp**, **grunt** 는 Node.js로 작성된 task runner이다.

**모듈 번들러** 는 모듈 패턴이 적용된 JavaScript 파일들을 웹 브라우저에서 실행가능한 번들(Bundle)로 생성해주는 프로그램이다.

+ **webpack** 은 node.js로 작성된 javascript 모듈 번들러이다.  
번들링 기능 뿐만 아니라 트랜스 파일 및 태스트 러너 기능도 포함할 수 있다.

[Webpack vs Gulp vs Grunt Comparison](https://da-14.com/blog/gulp-vs-grunt-vs-webpack-comparison-build-tools-task-runners)

***

# webpack

모듈 번들러.  

JS가 점점 중요해지면서 JS자체만으로도 엄청난 의존관계가 생겼다.  
ES2015 모듈, ReguireJS, CommonJS, UMD 같은 JS 모듈 시스템들이 나오고 JS파일도 다른 프로그래밍처럼 모듈 개념이 생겼다.

webpack은 의존성 모듈들을 상황에 맞게 묶어서 정적 자원으로 결과를 출력한다.  
현재는(2017.07.12 기준) webpack3까지 나온 상태이며 기존 webpack2와 크게 다르지 않다.

> **모듈시스템**  
자바스크립트는 예전부터 리소스(웹 페이지를 구성하는 자원) 관리가 어려웠다. 현재 웹에서는 해당 페이지에 필요한 모든 파일을 미리 불러와야하고, 그 파일들이 사용하는 변수가 겹치지 않나 봐야하고 스크립트 로딩 순서도 중요하다.  
이러한 문제를 해결하기 위해 commonJS, requireJS같은 자체적인 시스템을 만들었다.  
의존성 관리를 위해 파일 첫 부분에 이 파일은 어떤 패키지를 필요로 한다고 선언하면 선언한 패키지만 그 파일에서 사용한다.
* [webpack.js.org](https://webpack.js.org/concepts/)
* [JavaScript 모듈화 도구, webpack](http://d2.naver.com/helloworld/0239818)
* [JavaScript 표준을 위한 움직임: CommonJS와 AMD](http://d2.naver.com/helloworld/12864)
* [모듈시스템](https://www.zerocho.com/category/EcmaScript/post/579dca4054bae71500727ab9)
* [웹팩3(Webpack) 설정하기](https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d)
* [webpack2 입문 가이드](https://hyunseob.github.io/2017/03/21/webpack2-beginners-guide/)

webpack은 CommonJS와 AMD(Asynchronous Module Definition) 두 그룹 명세(모듈 명세)를 모두 지원하는 **JavaScript 모듈화 도구**

## webpack 장점

+ 편리한 모듈 의존성 관리
+ 로더를 활용한 다양한 리소스의 효율적인 활용
+ 빠른 컴파일 속도
+ 잘 정리된 문서

특히 로더는 다양한 리소스와 함께 개발하는 JavaScript 개발 환경에서 활용 범위가 매우 넓다

> **webpack 로더**  
> + 다양한 리소스를 Javascript에서 바로 사용할 수 있는 형태로 로딩하는 기능  
> ( e.g: coffeescript(개발언어) -> JavaScript )  
> + 많은 라이브러리를 지원하기 때문에 활용범위가 매우 넓은 기능
> ( e.g: React의 JSX형식을 사용할 수 있고 ECMAScript 2015를 사용할 수 있게  컴파일하는 Babel을 사용할 수 있다.)

## webpack 사용

### 1. 글로벌 설치, 로컬에 개발 환경으로 설치

```sh
$ npm i -g webpack && npm i -D webpack
```

### 2. webpack.config.js

웹팩은 하나의 설정 파일로 모든 걸 해결한다.  
package.json이 있는 위치에 다음의 파일을 만들어 준다.

```javascript
const webpack = require('webpack');
module.exports = {
  entry: {
    app: '',
  },
  output: {
    path: '',
    filename: '',
    publicPath: '',
  },
  module: {

  },
  plugin: [],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
}
```

이름이 webpack.config.js여야 웹팩이 바로 인식하고  
이름이 다를 경우 --config 플래그를 사용해 경로를 알려주면 됨  
(e.g, webpack --config 다른이름.js)

#### 2.1. entry

> **엔트리 파일**  
서로 의존 관계에 있는 다양한 모듈을 사용하는 시작점이 되는 파일.  
번들 파일은 브라우저에서 실행할 수 있게 모듈을 컴파일한 파일임

웹팩이 파일을 읽어들이기 시작하는 부분  
app이 객체의 키로 설정되어 있는데 이 부분 이름은 자유롭게 바꾸면 된다.
키가 app이면 결과물이 app.js로 zero이면 zeor.js로 나온다.

```javascript
// 결과물로 여러 JS를 만들고 싶을 때, app.js, zero.js 두 개가 생성됨
{
  entry: {
    app: '파일 경로',
    zero: '파일 경로',
  },
}
```

```javascript
// 하나의 entry에 여러 파일들을 넣고 싶을 때, 배열 사용
// a.js, b.js가 한 파일로 엮여 app.js라는 결과물이 나온다.
{
  entry: {
    app: ['a.js', 'b.js'],
  },
}
```

웹팩은 entry의 js파일을 포함해 import, require 관계로 묶여진 다른 js까지 알아서 파악해 모두 entry에 기재된 키 개수만큼 묶어준다.

리액트에서 주로 사용하는 예시. 각각의 엔트리가 polyfill들이 적용된 상태로 나온다.
```javascript
// app.js, vendor.js가 결과물로 나옴
{
  entry: {
    vendor: ['babel-polyfill', 'eventsource-polyfill', 'react', 'react-dom'],
    app: ['babel-polyfill', 'eventsource-polyfill', './client.js'],
  },
}
```

#### 2.2. output

결과물이 어떻게 나올지 설정

```javascript
{
  output: {
    path: '/dist',
    filename: '[name].js',
    publicPath: '/',
  },
}
```

+ **path** : output으로 나올 파일이 저장될 경로
+ **publicPath** : 파일들이 위치할 서버 상의 경로
+ **filename**
  - [name] : [name].js라고 지정해 줘야 예시의 entry의 app, vedor가 들어가 app.js, vendor.js로 결과물이 나온다
  - [hash] : 매번 웹팩 컴파일 시 랜덤한 문자열을 붙여줌, 캐시 삭제 시 유용하다.
  - [chunkhash] : 파일이 달라질 때에만 랜덤 값이 바뀐다. 변경되지 않은 파일들은 계속 캐싱하고 변경된 파일만 새로 불러올 수 있다.

#### 2.3. loader

웹팩의 막강한 기능  
모듈의 소스 코드에 적용되는 변환  
파일을 가져 오거나 'load'할 때 파일을 사전처리할 수 있다. 
따라서 로더는 다른 빌드 도구에서 'task'와 유사하며 프런트엔드 빌드 단계를 처리하는 강력한 방법을 제공한다.


##### e.g, babel 사용

[Babel 참고](https://www.zerocho.com/category/EcmaScript/post/57a830cfa1d6971500059d5a)

2.3.1. 설치

```sh
npm i -g babel-cli
npm i -D babel-loader babel-core babel-preset-env babel-preset-react babel-preset-stage-0
```
+ babel-loader, babel-core 설치는 필수이고 나머지 preset은 선택
+ react는 react 쓸 경우 설치
+ env는 사용하는 ecmascript 버전을 자동으로 파악해서 알아서 polyfill을 넣어줌
+ stage-0은 env보다 더 실험적인 최신 기술을 위한 것

```javascript
{
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          'env', {
            targets: {node: 'current'}, // 노드일 경우만
            modules: 'false'
          },
          'react',
          'stage-0'
        ],
      },
      exclude: ['/node_modules'],
    }],
  },
}
```

+ **test** : 정규식 조건(js나 jsx파일)에 부합는 파일들
+ **loader** : test의 파일들을 loader에 지정한 로더가 컴파일 한다.
+ **options** : 로더에 대한 옵션으로 예시에서는 설치한 presets들을 적용한다. 
+ **exclude** : 제외할 폴더나 파일, 예시에서는 바벨로 컴파일하지 않을 것들을 지정. 바벨로는 컴파일 하지 않지만 웹팩으로는 컴파일 한다.
+ **include** : 꼭 이 로더를 사용해 컴파일 할 것들을 지정해줄 수 있다.

'env' 다음에 taget, modules:false라는 옵션이 들어있다. (option의 option)  
modules를 false로 해야 **트리 쉐이킹**이 된다.

> 트리 쉐이킹 :  es2015 모듈 시스템 import 되지 않은 export들을 정리해주는 기능  
단, commonJS나 AMD, UMD 같은 모듈 시스템을 사용해야하는 클라이언트에서는 쓰면 안되다. 서버에서만 사용할 것

> 웹펙1에서는 loaders 대신 rules, use를 쓰고 options 대신 query를 쓴다.(하위호환을 위해 웹펙2에서  지원하기는 한다)

#### 2.4. plugin

부가적인 기능, 패키지로 존재하는 다양한 플러그인들을 사용하면 효과적으로 번들링할 수 있다.
e.g, 압축, 핫리로딩, 파일을 복사하는 등의 부수적인 작업

대표적인 웹팩 기본 제공 플러그인들 예제
```javascript
{
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UgilfyJsPlugin({
      sourceMap: true,
      compress: {
        warnigs: true,
      },
    }),
    new webpack.DefinePlugin({
      // 아래 EnvironmentPlugin처럼 할 수도 있다.
      'process.env.NODE_ENV': JSON.stringify('production'), 
    }),
    // 요즘은 위의 DefinePlugin보다 이렇게 하는 추세이다.
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
}
```

+ **LoaderOptionsPlugin** : 로더들에게 옵션을 넣어주는 플러그인
+ **ModuleConcatenationPlugin** : 웹펙3에서 새로 나옴, 웹팩이 변환하는 자바스크립트 코드를 조금이나마 더 줄여줌
+ **UgilfyJsPlugin** : 압축, console 제거, 소스맵 보존 등을 하는 플러그인
+ **DefinePlugin** : JS 변수를 치환해주는 플러그인

그 밖에 BannersPlugin, IgnorePlugin, EnvironmentPlugin, ContextReplacementPlugin 등의 기본 제공 플러그인이 있음

웹팩3에서는 DedupePlugin은 사라졌고, OccurrenceOrderPlugin은 기본으로 켜져 있으니 더 이상 추가하지 말 것

#### 2.5. resolve

`modules`에 node_modules를 넣어야 디렉토리의 node_modules를 인식할 수 있다.  
`exnstions`에 넣은 확장자들은 웹팩3에서 알아서 처리해주기 때문에 파일에 저 확장자들을 입력할 필요가 없어짐  
***


[es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter)