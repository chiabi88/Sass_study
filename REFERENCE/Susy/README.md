# [Susy](http://susy.oddbird.net/)

* [Susy Doc](http://susydocs.oddbird.net/en/latest/)

## 1. [Global Settings](http://susydocs.oddbird.net/en/latest/settings/#global-defaults)

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

## 2. Toolkit

### 2-1. [[mixin] span](http://susydocs.oddbird.net/en/latest/toolkit/#span-mixin)

#### Arbitrary Widths : @include span(<width>)
`@include span(25%)`
> 임의의 넓이를 전달한다.

#### Grid Widths : @include span(<width>)
`@include span(3)`
> 그리드 열을 지정한다.

#### Row Edges : @include span(<width> [last|first|alpha|omega])
`@include span(25% last)`
> 앞 뒤로 거터가 있는 그리드 사용 시에 행의 첫번째 또는 마지막 요소의 거터를 제거할 때 사용  
	`first` / `last` 또는 `alpha` / `omega`

#### Context : @include span(<width> of <layout>)
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

#### Nesting : @include span(<width> nest)
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

#### Location : @include span(isolate <width> at <location>)
`@include span(isolate 500px at 25%)`, `@include span(isolate 3 at 2)`
> 비대칭 그리드이고 isolate 기법을 사용할 경우 `at` 플래그를 사용하여 위치를 설정 

#### narrow(default), wide and wider : @include span(<width> [wide|wider])
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
#### Other Settings
