# DAY03
(2017-04-17)

## Sass Script

### 믹스인

> (.float-left와 같은 비의미론적 클래스에 의지하지 않고도) 스타일 시트 전체에서 재사용 할 수있는 스타일을 정의

* [참조 : Yamoo9 FDS](https://github.com/chiabi88/FDS/blob/3rd_FDS/LECTURE/README/0206.md#3-mixin)
* [참조 : Sass Doc](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins)
* [참조 : Sass Guideline](https://sass-guidelin.es/ko/#mixins)

##### 믹스인 정의와 사용

> 믹스인 지시어(=, @mixin), 믹스인 이름, 선택적 인수, 믹스인 내용을 담는 블록으로 정의함

* Sass

```Sass
// 믹스인 정의
=boxsizing()
  box-sizing: border-box

// 믹스인 사용
body
  +boxsizing
```

* SCSS

```SCSS
// 믹스인 정의
@mixin boxsizing {
  box-sizing: border-box;
}

// 믹스인 사용
body {
  @include boxsizing;
}
```

* CSS

```css
body {
  box-sizing: border-box;
}
```

> 믹스인은 선택자, 부모참조를 포함할 수 있다.

> 믹스인 이름 (및 다른 모든 Sass 식별자)은 하이픈을 사용할 수 있으며 언더 바와 같이 교차 사용이 가능하다.

* SCSS

```SCSS
@mixin clear-fix {
  &:after{
    clear: both;
    display: block;
    content: '';
  }
}

.content {
  @include clear-fix;
}

.block {
  @include clear_fix;
}
```

* CSS

```css
.content:after {
  clear: both;
  display: block;
  content: '';
}

.block:after {
  clear: both;
  display: block;
  content: '';
}

```

