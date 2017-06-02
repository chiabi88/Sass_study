## 3. [Toolkit](http://susydocs.oddbird.net/en/latest/toolkit/)

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

### 3-1. [[mixin] span](http://susydocs.oddbird.net/en/latest/toolkit/#span-mixin) :star2:

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

### 3-3. [[function/mixin] Gutters](http://susydocs.oddbird.net/en/latest/toolkit/#gutters)

**Format : _gutters($span)_**

> 함수로 `gutter`, `gutters`를 사용하면 설정 및 현재 컨텍스트에서 커터 폭을 반환한다.

```scss
// default context
margin-left: gutter();

// 10개 컬럼 레이아웃에서 1개의 거터폭과 동일한 마진을 출력
margin-left: gutter(10);
```

> 믹스인으로 사용하면 요소에 거터를 적용함.  
> gutter-position에 따라 margin 또는 padding 으로 거터가 출력됨

```scss
// 기본 거터 값을 가져옴
.item { @include gutters; }

// 거터 폭을 설정할 수 있음
.item { @include gutters(3em); }

// shorthand 구문을 통해 설정을 바로 조정할 수 있음

.item { @include gutters(3em inside); }

// 거터가 요소 뒤에 위치하고 10컬럼에 거터 넓이가 1컬럼의 1/3인 레이아웃 컨텍스트
.item { @include gutters(10 1/3 after); }
```

### 3-4. [[function/mixin] Container](http://susydocs.oddbird.net/en/latest/toolkit/#container) :star2:

**Format : _container($layout)_**

> 함수로 `container`를 사용하면 전역 설정이나 layout 인자를 바탕으로 container 넓이 값을 반환 함

```scss
.container {
  // 전역설정
  width: container();
}

// 12컬럼 그리드
$large-breakpoint: container(12); 
```

> 믹스인으로 사용하면 요소에 직접 컨테이너 설정을 적용함

```scss
$susy: (
  // math 설정이 static일 경우 column-width 값 설정이 필요함
  column-width: 100px;
)
body {
  // 컬럼 12개, 컨테이너 레이아웃 정렬이 센터인 고정형인 레이아웃 설정
  @include container(12 center static);
}
```

### 3-5. [[function/mixin] Nested Context](http://susydocs.oddbird.net/en/latest/toolkit/#nested-context)

**Function : _nested($span)_**  
**Mixin : _nested($span) {@context}_**

