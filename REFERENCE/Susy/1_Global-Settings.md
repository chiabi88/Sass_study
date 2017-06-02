## 1. Global Settings

글로벌 기본값을 설정하거나 필요한 경우 개벌적인 layout map을 사용하여 기본 설정을 구성할 수 있다.

### 1-1. [Global Defaults](http://susydocs.oddbird.net/en/latest/settings/#global-defaults)

```scss
/*
 * Susy Globa Settings
 * http://susydocs.oddbird.net/en/latest/settings/#global-defaults
 */

$susy: (
  // Flow
  // 문서의 읽는 방향 설정 (ltr, rtl)
  flow: ltr,

  // Math
  // 유동형(Fluid), 고정형(Static) width 설정 (fluid, static)
  // ※ 고정형으로 설정할 경우, column-width 값도 설정해줘야 함
  math: fluid,

  // Output
  // 레이아웃 출력 모드 설정 (float, isolate)
  // ※ 현재 Susy 버전은 Float을 메인으로 출력하지만, 향후 Flexbox 등 다양한 방법 지원 예정
  output: float,

  // Container
  // 컨테이너 요소의 최대 폭 값을 설정 (auto, <length>)
  container: auto,

  // Container Position
  // 상위 요소를 기준으로 하는 컨테이너 요소의 레이아웃 정렬 (center, left, right, <length> * 2)
  container-position: center,

  // Columns
  // 컬럼의 총 개수 설정 (4, <number>, <list>)
  // <list> (1 2) : 두번째 열이 첫번째 열의 두 배인 2열 그리드 / (1 1 2 3 4 8 13) 피보나치에서 따온 그리드
  columns: 4,

  // Gutters
  // 거터의 폭 설정 (1/4, <gutter-width>/<column-width>)
  gutters: 0.25,

  // Column Width
  // 컬럼의 폭 설정 (false, null, <length>)
  column-width: false,

  // Gutter Position
  // 거터의 방향 설정 (after, before, split, inside, inside-static)
  // ※ inside 설정은 Padding으로 처리됨
  gutter-position: after,

  // Global Box Sizing
  // 전역 CSS3 박스 사이즈 설정 (content-box, border-box)
  global-box-sizing: content-box,

  // Last Flow
  // 레이아웃 내의 마지막 요소 float 방향 설정 (to, from)
  last-flow: to,

  // Debug
  // 레이아웃 디버깅 환경 설정
  debug: (

    // 그리드 이미지: (hide, show, show-columns, show-baseline)
    // ※ 그리드 이미지를 보여줌, 만약 Compass vertical rhythms을 사용할 경우,
    // -line-height 설정 값에 따라 베이스라인을 그려줌.
    image: hide,

    // 그리드 컬럼 색상: (rgba(#66f, .25), <color>)
    color: rgba(#66f, .25),

    // 그리드 모드: (background, overlay)
    // ※ overlay 설정일 경우, 컨테이너 요소의 ::before 요소를 사용하여 오버레이 함.
    output: background,

    // 그리드 토글 버튼 방향: (top right, <direction>)
    // ※ overlay 설정에서만 사용 가능.
    toggle: top right
  ),

  // Use Custom
  // 사용자 정의 설정
  use-custom: (

    // 사용자 정의 background-image() 믹스인 사용 유무: (true, false)
    // ※ Compass, Bourbon의 믹스인을 사용할 경우, true로 설정
    background-image: true,

    // 사용자 정의 background-size(), -origin(), -clip() 사용 유무 (false, true)
    background-options: false,

    // 사용자 정의 box-sizing() 사용 유무: (true, false)
    // ※ Compass, Bourbon의 믹스인을 사용할 경우, true로 설정
    box-sizing: true,

    // 사용자 정의 clearfix() 사용 유무: (false, true)
    clearfix: true,

    // 사용자 정의 rem() 사용 유무: (true, false)
    rem: true,

    // 사용자 정의 breakpoint() 사용 유무: (true, false)
    breakpoint: true,
  )
);
```

### 1-2. Layout

#### 1-2-1. [[Function] Layout](http://susydocs.oddbird.net/en/latest/settings/#layout)

**Format : _layout($layout)_**

> Susy의 **layout**은 설정값을 병합적으로 구성할 수 있음, map 타입이나 shorthand로 사용할 수 있음.

※ 아래는 값을 저장만 한 것이지 설정한 것은 아님. 변수에 저장된 설정 값을 결합하는 때 유용하게 사용 될 수 있음.

```scss
// 함수를 사용하여 설정값 저장
$map: layout(auto 12 0.25 inside fluid isolate);

// map 타입으로 설정값 저장
$map:(
  container: auto,
  columns: 12,
  gutters: 0.25,
  gutter-position: inside,
  math: fluid,
  output: isolate,
);
```

**※ 구성값 병합 시 주의할 점**  
**단축값(속성값만) 저장된 변수** 를 사용하여 layout 믹스인에 전달하는 것은 문법에 어긋남  
layout 함수에 인자로 기본 구성값을 전달하여 반환 된 것을 사용하는 것은 가능함

**아래는 오류 구문**
```scss
// 아래는 error가 발생하여 동작하지 않음
$short: 12 .25 inside;
@include layout($short fluid no-gutters);
```

```scss
// 속성값만 저장된 변수를 layout 믹스인에 전달하면 error 발생
$map1: 13 static;
$map2: (6em 1em) inside;
@include layout($map1 $map2);
```

**아래는 작동함**
```scss
// layout 함수를 통해 저장된 값을 layout 믹스인에 전달하는 것이 가능
$map: layout(12 .25 inside);
@include layout($map fluid no-gutters);
```

```scss
// layout 함수를 통해 저장된 값을 layout 믹스인에 전달하는 것이 가능
$map1: layout(13 static);
$map2: layout((6em 1em) inside);
@include layout($map1 $map2);
```

#### 1-2-2. [[Mixin] Layout](http://susydocs.oddbird.net/en/latest/settings/#layout-mixin)

**Format : _layout($layout, $clean)_**

> 새 레이아웃을 전역 기본 값으로 설정한다.

```scss
// 전역 레이아웃을 설정하는 믹스인
@include layout(12 1/4 inside-static);
```
기본적으로 이러한 새로운 설정은 기존의 전역 설정에 추가됨  
$clean 인수를 사용하여 전역 설정을 초기화할 수 있음 ($clean 값을 true로 설정)

#### 1-2-3. [[Mixin] With Layout](http://susydocs.oddbird.net/en/latest/settings/#with-layout)

**Format : _with-layout($layout, $clean) { @content }_**

> 일시적으로 사용자의 코드 섹션에서 기본값을 설정할 수 있음

```scss
@include with-layout(8 static) {
  // 특정 영역 내에서 일시적으로 8컬럼 정적 그리드를 사용 하도록 설정
}

// 글로벌에 설정된 기본값이 사용됨
```

### 1-3. [[Function]Susy-Get](http://susydocs.oddbird.net/en/latest/settings/#susy-get)

**Format : _susy-get($key, $layout)_**

> `susy-get` 함수를 이용하면 레이아웃 설정을 가져올 수 있음

```scss
$large: layout(80em 24 1/4 inside);
$large-container: susy-get(container, $large);
```

_debug/images_ 같은 중첩 설정을 가져오려면 전체 경로의 `$key` 값을 넘겨 줌

```scss
// 전역 기본 설정값
$susy: (
  // 중첩된 키값
  debug: (
    image: hide,
    color: rgba(#66f, .25),
    output: background,
    toggle: top right,
  ),
  use-custom: (
    background-image: true,
    // ...
    box-sizing: true,
  )
);

// 중첩된 key 값을 가져옴
$debug-image: susy-get(debug image);
$custom-box-sizing: susy-get(use-custom box-sizing);
```




