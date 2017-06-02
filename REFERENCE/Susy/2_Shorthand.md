## 2. [Shorthand](http://susydocs.oddbird.net/en/latest/shorthand/)

임의의 설정을 함수와 믹스인에 쉽게 전달하기 위한 간단한 구문을 제공함

이름  | 용법 | 예시  |
------|------|-----
$grid | [columns] [gutter] [column-width] | $grid: 12;<br>$grid: 12 1/3 ;<br>$grid: 12 (60px 10px);<br>$grid: (1 2 3 2 1) .25;
$span | [span] at [location] of [layout] ;<br> [컬럼 넓이] at [위치] of [레이아웃 설정]  | $span: 8;<br> $span:8 of 12;<br>$span: 3 at 4 of 12 .25 fluid ;<br>$span: 30%;
$layout | [grid] [keywords]  | $layout:8;<br>$layout:4 (4em 1em) fluid inside-static rtl;

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