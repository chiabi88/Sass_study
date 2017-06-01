# Susy Doc 리뷰 

* [Susy](http://susy.oddbird.net/)
* [Susy Doc](http://susydocs.oddbird.net/en/latest/)
* [FDS yamoo9](https://github.com/chiabi88/FDS/blob/3rd_FDS/REFERENCES/Sass__Susy.md)

**Susy** 는 사용자가 복잡하지 않은 **math(레이아웃 계산방식)방식** 으로  
쉽게 그리드 시스템을 만들 수 있도록 도와주는 도구 :smile::+1:

## INDEX

1. [Global Settings](#1-global-settings)
2. [Shorthand](#2-shorthand)
3. [Toolkit](#3-toolkit)
 
Susy는 Sass의 **map** 타입 또는 **Shorthand Syntax(단축구문)** 과 같은 문법을 사용하여 settings(설정값)을 정의할 수 있음  
이 두 정의는 서로 바꿔서 사용할 수 있다.(호환성)

```scss
// $susy 변수에 map 형식으로 작성
$susy: (
  columns: 12, // 키: 값
  gutters: 1/4,
  math: fluid,
  output: float,
  gutter-position: inside,
);

// $shorthand 변수에 인수만 전달
$shorthand: 12 1/4 fluid float inside;
```

위 두 형식은 함수나 믹스인에 단일 인수로 전달 될 수 있고, 맵은 Shorthand의 일부로 사용할 수 있움

```scss
$susy: (
  columns: 12,
  gutters: .25,
  math: fluid,
);

@include layout($susy float inside);
```

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

### 1-2. [[Function] Layout](http://susydocs.oddbird.net/en/latest/settings/#layout)

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

### 1-3. [[Mixin] Layout](http://susydocs.oddbird.net/en/latest/settings/#layout-mixin)

**Format : _layout($layout, $clean)_**

> 새 레이아웃을 전역 기본 값으로 설정한다.

```
// 전역 레이아웃을 설정하는 믹스인
@include layout(12 1/4 inside-static);
```
기본적으로 이러한 새로운 설정은 기존의 전역 설정에 추가됨  
$clean 인수를 사용하여 전역 설정을 초기화할 수 있음 ($clean 값을 true로 설정)

### 1-3. [[Mixin] With Layout](http://susydocs.oddbird.net/en/latest/settings/#with-layout)

**Format : _with-layout($layout, $clean) { @content }_**

> 일시적으로 사용자의 코드 섹션에서 기본값을 설정할 수 있음

```
@include with-layout(8 static) {
  // 특정 영역 내에서 일시적으로 8컬럼가 정적 그리드를 사용 하도록 설정
}

// 글로벌에 설정된 기본값이 사용됨
```


## 2. Shorthand

임의의 설정을 함수와 믹스인에 쉽게 전달하기 위한 간단한 구문을 제공함

### 2-1. Overview : `$span`, `$grid`, `keywords`

#### `$span`

> 임의의 길이 또는 span될 열을 나타내는 단위가 없는 숫자  
  세부사항은 전달되는 기능 또는 믹스인에 따라 달라짐

#### `$grid`

> Columns 설정, Gutters 와 Column Width 옵션 설정으로 구성  

```scss
// 12 컬럼 그리드 
$grid: 12;

// 1/3 크기의 거터를 가지는 12 컬럼 그리드
$grid: 12 1/3;

// 60px의 컬럼과 10px의 커터를 가지는 12 컬럼 그리드
$grid: 12 (60px 10px);

// 0.25의 거터를 가지는 컬럼이 각각 1, 2, 3, 2, 1인 비대칭 그리드
$grid: (1 2 3 2 1) 0.25; 
```

#### `$keywords`

> 대부분의 셋팅은 span과 grid 옵션 앞, 뒤 또는 사이에 포함할 수 있는 간단한 키워드 값이 있다. 

```scss
// All the keywords in Susy:

$global-keywords: (
  container            : auto,
  math                 : static fluid,
  output               : isolate float,
  container-position   : left center right,
  flow                 : ltr rtl,
  gutter-position      : before after split inside inside-static,
  debug: (
    image              : show hide show-columns show-baseline,
    output             : background overlay,
  ),
);

$local-keywords: (
  box-sizing           : border-box content-box,
  edge                 : first alpha last omega,
  spread               : narrow wide wider,
  gutter-override      : no-gutters no-gutter,
  clear                : break nobreak,
  role                 : nest,
);
```

전역 키워드는 어디에나 사용할 수 있으며 전역 기본 설정에 적용할 수 있다.  
지역 키워드는 각 개별 용도에 따라 다르다

### 2-2. Layout : `$grid`, `keywords`

> 가장 간단한 속기 변형은 광번위한 용어로 레이아웃을 정의하는데 사용된다.

```scss
// grid: (columns: 4, gutters: 1/4, column-width: 4em)
// keywords: (math: fluid, gutter-position: inside-static, flow: rtl);
$small: 4 (4em 1em) fluid inside-static rtl;
```

_layout_ 함수를 이용하면 shorthand에서 map 구문으로 쉽게 변환 가능하다.

### 2-3. Span : `<span> at <location> of <layout>`

> Susy의 함수 및 믹스인은 대부분 넓이 또는 `span`을 계산하거나 설정하는 데 사용된다.

```scss
// 패턴:
// $span: $span at $location of $layout;

// span: 3;
// location: 4;
// layout: (columns: 12, gutters: .25, math: fluid)
$span: 3 at 4 of 12 .25 fluid;

// 대부분의 경우 $span만 필요함
$span: 30%;
```

**at** 플래그는 location 바로 앞에 옴, **of** 플래그 다음의 모든 것은 layout의 일부로 처리함

## 3. Toolkit

**shorthand** 구문 기반으로 만들어짐

※ Susy2 주요 믹스인 / 함수

```scss

// 믹스인
@include container(<length>|auto);
@include span( <width> [<wide / wider>] of <layout> [<last>] );
@include gutter(<lenght> | ...);

// 함수
container(auto | <length>);
span(<length> | ...);
gutter(<lenght> | ...);
```

### 3-1. [[mixin] span](http://susydocs.oddbird.net/en/latest/toolkit/#span-mixin)

**Format : _span($span) {@content}_**

> 그리드 작업시 요소의 columns(컬럼 수)를 정의, Susy2 그리드 시스템 컬럼의 총 개수는 기본값이 4

#### 3-1-1. Arbitrary Widths : @include span(<width>)
`@include span(25%)`
> 임의의 넓이를 전달한다.

#### 3-1-2. Grid Widths : @include span(<width>)
`@include span(3)`
> 그리드 열을 지정한다.

#### 3-1-3. Row Edges : @include span(<width> [last|first|alpha|omega])
`@include span(25% last)`
> 앞 뒤로 거터가 있는 그리드 사용 시에 행의 첫번째 또는 마지막 요소의 거터를 제거할 때 사용  
	`first` / `last` 또는 `alpha` / `omega`

#### 3-1-4. Context : @include span(<width> of <layout>)
`@include span(2 of 5)`
> 다른 요소 내부에 그리드 요소를 중첩할 때 context가 필요함  
	`of` 플래그는 context를 알리는데 사용됨 (context)는 항상 부모의 그리드 범위와 같다. 

```scss
.outer {
  @include span(5);
  .inner { @include span(2 of 5); }
}
.outer {
  @include span(5);
  .inner { @include span(2); }
}
```

#### 3-1-5. Nesting : @include span(<width> nest)
`@include span(5 nest)`
> 그리드가 gutter 설정이 `inside`, `inside-static`, `split`일 경우  
	그리드 정렬 자식요소가 있다면 `nest`를 표시해 줘야 함

```scss
$susy: (
  gutter-position: inside // or inside-static, split
);
.outer {
  @include span(5 nest);
  .inner { @include span(2 of 5); }
}
```

#### 3-1-6. Location : @include span(isolate <width> at <location>)
`@include span(isolate 500px at 25%)`, `@include span(isolate 3 at 2)`
> 비대칭 그리드이고 isolate 기법을 사용할 경우 `at` 플래그를 사용하여 위치를 설정 

#### 3-1-7. narrow(default), wide and wider : @include span(<width> [wide|wider])
`@include span(2 wide)`
> 1또는 2 이상의 gutters를 포함한 column 의 넓이 폭을 넓힐 수 있음

```scss
// grid span
.narrow { @include span(2); }
.wide { @include span(2 wide); }
.wider { @include span(2 wider); }

// width output (7 columns, .25 gutters)
// (each column is 10%, and each gutter adds 2.5%)
.narrow { width: 22.5%; }
.wide { width: 25%; }
.wider { width: 27.5%; }
```
#### 3-1-8. Other Settings
> 전체 키워드를 통해 전체 context를 확장할 수 있다.  
> `break|nobreak`: 이전 float을 지우고 새로운 행을 시작할 지 결정  
> `no-gutters`: 개별 span에서 거터 출력을 제거  
> `border-box|content-box` : box-sizing 출력 변경  
> 기타 전역 설정 변경 가능

```scss
// grid span
.item { @include span(isolate 4 at 2 of 8 (4em 1em) inside rtl break); }

// output
.item {
  clear: both;
  float: right;
  width: 50%;
  padding-left: .5em;
  padding-right: .5em;
  margin-left: 25%;
  margin-right: -100%;
}
```

### 3-2. [[fuctions] span](http://susydocs.oddbird.net/en/latest/toolkit/#span-function)

**Format : _span($span)_**

> span 믹스인과 동일하지만 span 폭 값만 반환함,  
> span 함수를 이용해 width, margin, padding의 값을 셋팅할 수 있다.

```scss
.item {
  width: span(2);
  margin-left: span(3 wide); // 거터를 포함한 3개 컬럼을 margin-left 값으로 설정
  margin-right: span(1) + 25%; // 1개 컬럼에 25%를 더한 값을 margin-right 값으로 설정
}
```

***

* [Susy Tutorial (video)](https://leveluptutorials.com/tutorials/susy-tutorials)