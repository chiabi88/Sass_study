# 내장함수

* 참조 링크

> [http://sass-lang.com/documentation/Sass/Script/Functions.html](http://sass-lang.com/documentation/Sass/Script/Functions.html)

> [http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions)

#### 1. Color Functions

* [색상(hue) 변경](Functions.md#1-1-색상hue-변경) : adjust-hue($color, $degrees)
* [채도(saturation) 변경](Functions.md#1-2-채도saturation-변경) : saturate($color, $amount), desaturate($color, $amount)
* [휘도(lightness) 변경](Functions.md#1-3-휘도lightness-변경) : lighten($color, $amount), darken($color, $amount)
* [투명도(opacity) 변경](Functions.md#1-4-투명도opacity-변경) : rgba($red, $green, $blue, $alpha), rgba($color, $alpha)
* [색의 반전](Functions.md#1-5-색의-반전) : invert($color)
* [grayscale로 변경](Functions.md#1-6-grayscale로-변경) : grayscale($color)
* [보색으로 변경](Functions.md#1-7-보색으로-변경) : complement($color)
* [중간색 취득](Functions.md#1-8-중간색-취득) : mix($color1, $color2, [$weight])

##### 1-1. 색상(hue) 변경

> adjust-hue($color, $degrees)
```Sass
adjust-hue(hsl(120, 30%, 90%), 60deg) => hsl(180, 30%, 90%)
adjust-hue(hsl(120, 30%, 90%), 60deg) => hsl(180, 30%, 90%)
adjust-hue(#811) => #886a11
```

##### 1-2. 채도(saturation) 변경

> saturate($color, $amount)
```Sass
saturate(hsl(120, 30%, 90%), 20%) => hsl(120, 50%, 90%)
saturate(#855, 20%) => #9e3f3f
```
> desaturate($color, $amount)
```Sass
desaturate(hsl(120, 30%, 90%), 20%) => hsl(120, 10%, 90%)
desaturate(#855, 20%) => #726b6b
```

##### 1-3. 휘도(lightness) 변경

> lighten($color, $amount)
```Sass
lighten(hsl(0, 0%, 0%), 30%) => hsl(0, 0, 30)
lighten(#800, 20%) => #e00
```
> darken($color, $amount)
```Sass
darken(hsl(25, 100%, 80%), 30%) => hsl(25, 100%, 50%)
darken(#800, 20%) => #200
```

##### 1-4. 투명도(opacity) 변경

> rgba($red, $green, $blue, $alpha)
```Sass
rgba($red, $green, $blue, $alpha)
```
> rgba($color, $alpha)
```Sass
rgba(#102030, 0.5) => rgba(16, 32, 48, 0.5)
rgba(blue, 0.2)    => rgba(0, 0, 255, 0.2)
```
##### 1-5. 색의 반전

> invert($color)
```Sass
invert(#f00) => cyan
invert(#0f0) => magenta
invert(#00f) => yellow
```

##### 1-6. grayscale로 변경

> grayscale($color)
```Sass
grayscale(#79a5e0) => #adadad
```
> desaturate($color, $amount)
```Sass
desaturate(#79a5e0, 100%) => adadad
```

##### 1-7. 보색으로 변경

> complement($color)
```Sass
complement(#79a5e0) => #e0b479
```

##### 1-8. 중간색 취득

> mix($color1, $color2, [$weight])
```Sass
mix(#f00, #00f) => #7f007f
mix(#f00, #00f, 25%) => #3f00bf
mix(rgba(255, 0, 0, 0.5), #00f) => rgba(63, 0, 191, 0.75)
```

- [나머지 함수 : rgb, red, green ...](http://sass-lang.com/documentation/Sass/Script/Functions.html#rgb_functions)

***

#### 2. String Functions

##### 2-1. 따옴표로 묶기

> quote($string)
```Sass
quote("foo") => "foo"
quote(foo) => "foo"
```

##### 2-1. 따옴표 제거

> unquote($string)
```Sass
unquote("foo") => foo
unquote(foo) => foo
```

- [나머지 함수 : str_length, str_insert ...](http://sass-lang.com/documentation/Sass/Script/Functions.html#string_functions)

- [Sass Color Generator](http://scg.ar-ch.org/)

***

#### 3. Number Functions

##### 3-1. 숫자값을 %로 변환

> percentage($number)
```Sass
percentage(0.2) => 20%
percentage(100px / 50px) => 200%
```

##### 3-2. 소숫점 이하 반올림

> round($number)
```Sass
round(10.4px) => 10px
round(10.6px) => 11px
```

##### 3-3. 소숫점 이하 올림

> ceil($number)
```Sass
ceil(10.4px) => 11px
ceil(10.6px) => 11px
```

##### 3-4. 소숫점 이하 절사

> floor($number)
```Sass
floor(10.4px) => 10px
floor(10.6px) => 10px
```

##### 3-5. 절대값 반환

> abs($number)
```Sass
abs(10px) => 10px
abs(-10px) => 10px
```

- [나머지 함수 : min, max, random](http://sass-lang.com/documentation/Sass/Script/Functions.html#number_functions)

***

#### 4. List Functions

##### 4-1. 리스트 요소 수 반환

> length($list)
```Sass
length(10px) => 1
length(10px 20px 30px) => 3
length((width: 10px, height: 20px)) => 2
```

##### 4-2. 리스트의 n번째 요소 반환

> nth($list, $n)
```Sass
nth(10px 20px 30px, 1) => 10px
nth((Helvetica, Arial, sans-serif), 3) => sans-serif
nth((width: 10px, length: 20px), 2) => length, 20px // 맵에서 n번째 쌍을 반환
```

##### 4-3. 요소의 index 반환

> index($list, $value)
```Sass
index(1px solid red, solid) => 2
index(1px solid red, dashed) => null
index((width: 10px, height: 20px), (height 20px)) => 2 // 멥에서의 위치도 반환
```

##### 4-4. 리스트의 마지막에 단일 요소 추가

> append($list1, $val, [$separator])
> separator : space, comma, or auto[default]
```Sass
append(10px 20px, 30px) => 10px 20px 30px
append((blue, red), green) => blue, red, green
append(10px 20px, 30px 40px) => 10px 20px (30px 40px)
append(10px, 20px, comma) => 10px, 20px
append((blue, red), green, space) => blue red green
```

##### 4-5. 리스트와 리스트의 결합

> join($list1, $list2, [$separator])
```Sass
join(10px 20px, 30px 40px) => 10px 20px 30px 40px
join((blue, red), (#abc, #def)) => blue, red, #abc, #def
join(10px, 20px) => 10px 20px
join(10px, 20px, comma) => 10px, 20px
join((blue, red), (#abc, #def), space) => blue red #abc #def
```

##### 4-6. 복수의 리스트를 각자의 순서에 맞춰 재결합

> zip($lists…)
```Sass
zip(1px 1px 3px, solid dashed solid, red green blue)
=> 1px solid red, 1px dashed green, 3px solid blue
```

- [나머지 함수 : list-separator...](http://sass-lang.com/documentation/Sass/Script/Functions.html#list-functions)

***

#### 5. Map Functions

##### 5-1. key로 value 값 찾기

> map-get($map, $key)
```Sass
map-get(("foo": 1, "bar": 2), "foo") => 1
map-get(("foo": 1, "bar": 2), "bar") => 2
map-get(("foo": 1, "bar": 2), "baz") => null
```

- [나머지 함수 : map-merge, map-remove, map-keys...](http://sass-lang.com/documentation/Sass/Script/Functions.html#map-functions)

***

#### 6. Introspection Functions

##### 6-1. Data type 반환

> type_of($value)
```Sass
type-of(100px)  => number
type-of(asdf)   => string
type-of("asdf") => string
type-of(true)   => bool
type-of(#fff)   => color
type-of(blue)   => color
```

##### 6-2. Data unit 반환

> unit($number)
```Sass
unit(100) => ""
unit(100px) => "px"
unit(3em) => "em"
unit(10px * 5em) => "em*px"
unit(10px * 5em / 30cm / 1rem) => "em*px/cm*rem" // 복합일 경우 알파벳 순
```

##### 6-3. 값에 단위가 있는지 확인

> unitless($number)
```Sass
unitless(100) => true
unitless(100px) => false
```

##### 6-4. 2개의 값을 합산, 감산, 비교 가능한지 확인

> comparable($number1, $number2)
```Sass
comparable(2px, 1px) => true
comparable(100px, 3em) => false
comparable(10cm, 3mm) => true
```

- [나머지 함수 : feature-exists, variable-exists, global-variable-exists...](http://sass-lang.com/documentation/Sass/Script/Functions.html#introspection_functions)
