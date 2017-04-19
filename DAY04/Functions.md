# DAY04
(2017-05-)

## Sass Script

### 내장함수

* 참조 링크

> [http://sass-lang.com/documentation/Sass/Script/Functions.html](http://sass-lang.com/documentation/Sass/Script/Functions.html)

> [http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions)

##### 1. Color Functions

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