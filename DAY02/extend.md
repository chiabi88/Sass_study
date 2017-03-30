# @extend 사용을 지양하는 이유

* 확장은 눈에 보이지 않는다 (css 결과물을 확인하기 어렵다.)
* 확장은 유연하지 않다.
* 믹스인보다 성능이 더 뛰어나다고 할 수 없다.
* @media 안에서 외부의 선택자를 확장할 수 없다.

## Extending is invisible

* @extend를 사용할 경우 연관성 없는 값들이 한 장소에 묶여서 소스 순서가 어그러져 혼란을 준다. <br/>
심각한 경우 적용 우선순위 점수(specificity)가 엉망이 되어 코드가 의도하지 않은 결과를 낳을 수 있다.

## Extending is not flexible

* 믹스인의 더 강력한 기능들
 + 인자를 받는다
 + 인자에 대한 기본값을 정의할 수 있다.
 + 가변 인자를 정의할 수 있다.
 + 모든 콘텐츠가 @content(컨텐츠 블록)을 통해 전달되는 것을 허용한다.

#### 믹스인을 사용할 경우
* sass

```sass
// _mixins.scss
@mixin center($max-width: null){
	max-width: $max-width;
	width: 100%;
	margin: 0 auto;
}

// main.scss
.container {
	@include center(1170px);
}
// customer.css
.customer__list {
	@include center(560px);
}
```

* css

```css
.container {
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
}
.customer__list {
  max-width: 560px;
  width: 100%;
  margin: 0 auto;
}
```

#### @extend를 사용할 경우

* sass

```sass
$max-width: null !default;

center {
  max-width: $max-width;
  width: 100%;
  margin: 0 auto;
}
// main.scss
.container {
  $max-width: 1170px;
	@extend center;
}
// customer.css
.customer__list {
  $max-width: 560px;
	@extend center;
}
```

* css

```css
center, .container, .customer__list {
  width: 100%;
  margin: 0 auto;
}
```

## Extending is not necessarily better than mixins regarding performance
 
동일한 CSS 선언을 반복하는 것이 아니라 선택자를 그룹화해서 성능상 믹스인 보다 더 좋다고 하지만 Gzip으로 압축하게 되면 별 차이가 없다.

> Gzip : 파일의 압축과 압축풀기에 사용되는 응용 소프트웨어이며 대부분의 모던 브라우저에서 지원되고 있기 때문에 서버쪽에서 기능추가를 했을 경우 쉽게 압축된 파일을 보내고 풀고 할 수 있게 된다.

[Minify Gzip이 페이지 로딩시간에 미치는 영향](http://nuli.navercorp.com/sharing/blog/post/1132468)

## Extending is not possible across media contexts

#### @extend는 media안에서 충돌이 일어남

```sass
.app {
  content: 'module';
}
@media screen and (min-width: 30em) {
  .gnb {
    // 충돌을 일으킴
    @extend .app;
  }
}
```
***

* [참조: Why You Should Avoid Sass @extend](https://www.sitepoint.com/avoid-sass-extend/)
* [참조: When to use @extend; when to use a mixin](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
