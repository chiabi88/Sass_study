# Use lenghts, not stirings

※ [원문](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)

- 예제

```Sass
$value: 13.37;
$length: $value + em;

whatever {
  padding-top: $length; // 13.37em
}
```

### The problem

숫자를 필요로 하는 특정 함수에서는 문제가 생김

```Sass
$value: 13.37;
$length: $value + em;

whatever {
  padding-top: $length;
}


$rounded-length: round($length); 
// $value: "13.37em" is not a number for `round'
```

> abs(), ceil(), floor(), min(), unit()...

unit()함수는 단위를 리턴하지 못하는데, 이유는 문자열이라 단위가 없기 때문 <br>
숫자(13.37)에 문자열(em)을 추가하면 암시적으로 문자열로 캐스팅 됨

실제로 type-of()함수로 변수의 타입을 체크하면 숫자가 아니라 문자열로 나온다.

```Sass
type-of($length);

// string
```

### The solution

단위를 추가하는 대신 숫자에 1 단위를 곱하면 된다.

```Sass
$vaule: 13.37;
$length: $vaule * 1em;

whatever {
  padding-top: round($length); // 13em
}
```