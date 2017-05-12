# 믹스인, 함수의 가변 전달인자 보충 내용 (보류 2017-05-10)

* [참조: Sass Multiple Arguments, Lists or Arglist](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

## The variable argument

#### liner-gradient(선형 그래디언트) 믹스인 - 가변인자를 받는 경우

(믹스인에 전달되는 색상점 수가 여러 개일 수 있기 때문에 가변 인수에 대한 적절한 예이다.)

```Sass
@mixin linear-gradient($direction, $gradients...) {
  background-color: nth($gradients, 1);
  background-image: linear-gradient($direction, $gradients...);
}

.selector {
  @include linear-gradient(to right, magenta, red, orange, yellow, green, blue, purple);
}
```

```css
.selector {
  background-color: magenta;
  background-image: linear-gradient(to right, magenta, red, orange, yellow, green, blue, purple);
}
```

#### font-family 믹스인

```Sass
@mixin my-font($font-family...) {
  @if length($font-family) == 0 {
    $font-family: sans-serif;
  }
  font-family: $font-family;
}

.my_txt {
  @include my-font(Arial, Helvetica, sans-serif);
}
```

```css
.my_txt {
  font-family: Arial, Helvetica, sans-serif;
}
```
##### ※ linear-gradient

```css
linear-gradient([ [ [ <angle> | to <side-or-corner> ,]? <color-stop>[, <color-stop>]+); <br>

linear-gradient( 45deg, blue, red );           
/* 45도 기울기, blue로 시작해서 red로 종료되는 그레디언트 */

linear-gradient( to left top, blue, red);      
/* bottom, right에서 시작해서 top, left에서 종료, blue로 시작해서 red로 종료되는 그레디언트 */

linear-gradient( 0deg, blue, green 40%, red ); 
/* bottom에서 시작해서 top에서 종료(수직 그레디언트), blue에서 시작해서 green으로 40%지점에서 전환된 후, red로 종료되는 그레디언트 */
```
* angle : 그래디언트 진행 방향 각도 <br>
* side-or-coner : 그래디언트 라인의 시작점, 수평속성 + 수직속성 키워드 2개로 구성 (생략 가능, 순서 상관 없음) 
* color-stop :color값 + 색상점(stop position) 위치 값

## Multiple arguments

별도의 이름이 지정된 여러개의 인자가 관련없는 인자를 처리할 때 종종 사용된다.
하나씩 인자를 전달하거나 리스트나 맵을 사용하여 한꺼번에 인자를 전달할 수 있다.

```Sass
@function dummy($a, $b, $c: "default") {
  // do stuff
}

$parameters: (true, 42, 'kittens');
```

##### 1. 매개 변수 리스트를 기반으로 함수를 호출하는 방법 ( 권장하지 않음 )

```Sass
$value: dummy(nth($parameters, 1), nth($parameters, 2), nth($parameters, 3));
```

##### 2. 리스트($parameters)를 가변인자로 전달하는 방법 
올바르게 정렬해야 함

```Sass
$value: dummy($parameters...);
```

##### 3. 맵($parameters)를 가변인자로 전달하는 방법 
Sass 3.3 부터  map 사용 가능, 인수 이름과 일치하는 맵 키를 작성하면 맵에 '...'을 추가하여 맵을 가변인자로 즉시 변환 할 수 있다. Sass는 올바른 순서로 값을 수집한다.

```Sass
$parameters: (
  'c': 'kittens',
  'a': true,
  'b': 42
);

$value: dummy($parameters...);
```

* 인자 수가 제한되지 않기를 기대할 경우(믹스인에 들어가는 매개변수의 개수를 알 수 없을 때) arglist를 사용한다.
* 인자 수가 제한될 경우 여러개의 명명 된 인자를 사용한다. (리스트나 맵을 사용하여 한 번에 하나씩 전달할 수 있다.)
* 만약 믹스인, 함수의 목록을 원하면 list를 사용한다.