# Annotations

## 설명 (DESCRIPTION)

문서화 된 항목을 설명

```scss
/// 이 곳에 설명 추가
/// 원한다면 여러 줄로 작성 가능
/// Markdown 문법으로 구문 분석 됨
```

## @access

> 문서화 된 항목에 대한 접근 여부(공개, 비공개)를 설정

- placeholders
- variables
- functions
- mixins

```scss
/// @access private

/// @access public
```

## @alias

> 문서화 된 항목이 다른 항목의 별칭인지 여부를 정의

- variables
- functions
- mixins

```scss
/// @alias 다른 항목
```

## @author

> 문서화 된 항목에 대한 저자

- placeholders
- variables
- functions
- mixins

```scss
/// @author 작성자 이름 (Markdown으로 구문 분석)
```

## @content

> 문서화 된 믹스인에 대한 내용 설명

- mixins

```scss
/// @content 믹스인 설명
```

## @deprecated

> 문서화 된 항목에 대한 파기 여부 설정

- placeholders
- variables
- functions
- mixins

```scss
/// @deprecated
/// @deprecated 파기 내용 이유 설명(옵션, Makrdown 구문 분석)
```

## @example

> 문서화 된 항목 사용 예시 설명

- placeholders
- variables
- functions
- mixins

※ notes
> - 예시는 들여쓰기를 사용해야 올바르게 동작
> - 현재 지원되는 언어 : `css`, scss`, `markup`, `javascript`
> - 설명 앞 `-`은 선택 사항
> - Markdown으로 구문 분석 됨

```scss
/// @example
///   4 + 2 = 8
///   4 / 2 = 2
///
/// @example scss - 클램프 함수
///   clamp(42, $min: 13, $max: 37)
///   // 37
```

## @group

> 문서화 된 항목이 속한 그룹(이 있을 경우)을 설정

- placeholders
- variables
- functions
- mixins

※ notes
> - 그룹은 SassDoc의 기본 테마에 항목이 표시되는 방식을 정의
> - 그룹을 구성하는 별칭 지정 가능

```scss
/// @group helpers
```

## @ignore

> 문서화 된 항목과 관련된 사항 중 무시 사항 설정

- placeholders
- variables
- functions
- mixins

```scss
/// @ignore Message
```

## @link

> 문서화 된 항목과 관련된 링크

- placeholders
- variables
- functions
- mixins

```scss
/// @link http://some.url
/// @link http://some.url - 링크 설명 (옵션)
```

## @name

> 문서화 된 항목의 사용자 정의 이름

- placeholders
- variables
- functions
- mixins

```scss
/// @name message-[error|warning|success|info]
```

## @output

> 믹스인이 출력하는 사항에 대한 설명 (Markdown 구문 분석)

- mixins

```scss
/// @output 설명
```

## @parameter

> 문서화 된 항목의 매개변수를 설명

- functions
- mixins

※ notes
> - 여러 유형은 파이프(`|`)로 구분
> - Markdown으로 구문 분석

※ Aliases: @arg, @argument, @param

```scss
/// @param {type} $name
/// @param {type | othertype} $name
/// @param {type} $name - 설명(옵션)
/// @param {type} $name [default value] - 설명(옵션)
```

## @property

> 문서화 된 항목의 속성 설명

- functions
- mixins

※ notes
> - 속성을 매핑하고, 점 표기법을 사용하여 중첩
> - Markdown으로 구문 분석

※ Aliases: @prop

```scss
/// @prop {Type} base.default [default] - 설명(옵션)
```

## @require

> 문서화 된 항목에 다른 항목이 필요한지 여부를 정의

- placeholders
- variables
- functions
- mixins

※ notes
> - 유형(type)은 옵션
> - 기본 유형은 함수(function)
> - <link>는 옵션
> - Markdown으로 구문 분석

```scss
/// @require item
/// @require {type} item
/// @require {type} item - 설명(옵션)
/// @require {type} item 설명(옵션)
/// @require {type} item <link>
/// @require {type} item 설명(옵션) <link>
```

## @return

> 문서화 된 함수의 반환 값 설명

- functions

※ notes
> - 여러 유형은 파이프(`|`)로 구분
> - Markdown으로 구문 분석

```scss
/// @return {type}
/// @return {type | othertype}
/// @return {type} 설명(옵션)
```

## @see

> 문서화 된 항목과 관련이 있는 항목을 설명

- placeholders
- variables
- functions
- mixins

※ notes
> - 기본 유형은 함수
> - 여러 유형은 파이프(`|`)로 구분
> - Markdown으로 구문 분석

```scss
/// @see other-item
/// @see {mixin} other-item
/// @see $other-item
/// @see %other-item
```

## @since

> 문서화 된 항목이 구현, 업데이트된 버전을 설명

- placeholders
- variables
- functions
- mixins

※ notes
> - Markdown으로 구문 분석

```scss
/// @since 버전(version)
/// @since 버전(version) 설명(옵션)
```

## @throw

> 문서화 된 항목에 의해 발생한 오류를 설명

- placeholders
- functions
- mixins

※ notes
> - Markdown으로 구문 분석

```scss
/// @throw Error 관련 메시지
```

## @todo

> 문서화 된 항목에 대해 수행할 작업을 정의

- placeholders
- variables
- functions
- mixins

※ notes
> - Markdown으로 구문 분석

```scss
/// @todo 할 일 정의
```

## @type

> 문서화 된 변수의 유형을 설명

- variables

※ notes
> - 여러 유형은 파이프 기호(`|`)로 구분
> - Markdown으로 구문 분석

```scss
/// @type Bool
/// @type Bool | String
```