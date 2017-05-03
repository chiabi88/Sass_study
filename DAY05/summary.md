# Sass 가이드라인 요약

- [참조 : Too Long; Didn’t Read](https://sass-guidelin.es/#too-long-didnt-read)
- [참조 : 너무 길어서 안 읽은 분들을 위해](https://sass-guidelin.es/ko/#section-84)

## 핵심원칙
 
- 일관성, Sass Guidelines의 규칙에 동의하지 않을 경우 일관성 있는 한 공정하게 처리할 것 [→](https://sass-guidelin.es/#why-a-styleguide)
- Sass는 가능한 한 간단하게 유지 [→](https://sass-guidelin.es/#key-principles)
- 때로는 KISS(Keep It Simple, Stupid) 규칙이 DRY(Don’t Repeat Yourself) 규칙에 우선한다. [→](https://sass-guidelin.es/#key-principles)

## 구문 및 서식 [→](https://sass-guidelin.es/#syntax--formatting)

- 들여쓰기는 탭 대신 2개의 공백으로 
- 행의 너비는 80글자
- CSS는 Harry Roberts의 [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)에 따라 작성되어야 한다.
- Sass에서 공백은 비용이 들지 않으며 항목, 규칙 및 선언을 구분하는 데 사용한다.

#### 문자열

- 스타일 시트 최상단에 @charset 지시어를 선언하는 것이 좋다. [→](https://sass-guidelin.es/#encoding)
- CSS 식별자로 적용되지 않는 한, 문자열과 URL의 작은따옴표로 감싼다. [→](https://sass-guidelin.es/#strings-as-css-values)

#### 숫자

- Sass는 숫자, 정수, 부동 소수점을 구별하지 않으므로 뒤에 제로(0)는 생략한다. <br>
앞에 오는 제로(0)는 가독성을 높이고 추가되어야 한다. [→](https://sass-guidelin.es/#zeros)
- 제로(0) 길이는 단위를 붙이지 않는다. [→](https://sass-guidelin.es/#units)
- 단위 조작은 문자열 연산이 아닌 산술 연산으로 간주되어야 한다. [→](https://sass-guidelin.es/#units)
- 가독성을 높이기 위해 최상위 레벨 계산은 괄호로 묶어야한다. [→](https://sass-guidelin.es/#calculations)
- 매직넘버는 코드의 유지 보수성을 손상시키므로 피해야한다. 불가피한 사용시 충분한 설명을 할 것 [→](https://sass-guidelin.es/#magic-numbers)

#### 컬러

- 색상은 가능한 한 HSL > RGB > 16진수로 표시, 색상 키워드는 피해야 한다. [→](https://sass-guidelin.es/#color-formats)
- 색상을 밝게하거나 어둡게 할 때 lighten(..), darken(..) 함수보다 mix(..)함수가 이점이 있다. [→](https://sass-guidelin.es/#lightening-and-darkening-colors)

#### 리스트 [→](https://sass-guidelin.es/#lists)

- 리스트는 쉼표로 구분한다. (공백으로 구분 된 CSS 값의 직접 매핑으로 사용되지 않는 한)
- 가독성을 높이기 위해 괄호로 감싸는 것을 고려해야 한다.
- 한 줄 리스트에는 후행 쉼표가 없어야 한다. (여러 줄로 된 리스트에는 가능)

#### 맵 [→](https://sass-guidelin.es/#maps)

- 한 쌍 이상을 포함하는 맵은 여러 행으로 작성 된다.
- 유지 보수를 돕기 위해 맵의 마지막 쌍에는 뒤에 쉼표를 붙인다.
- 문자열로 된 맵 키는 다른 문자열로 인용되어야 한다. (작은 따옴표로 감싸야한다.)

#### 선언 정렬 [→](https://sass-guidelin.es/#declaration-sorting)

- 선언정렬은 알파벳 순이든 유형별 정렬이든 일관성이 있는 한 상관없다.

#### 선택자 내포 Nesting [→](https://sass-guidelin.es/#selector-nesting)

- 필요없는 선택자 중첩을 피하라.
- 가상 클래스(pseudo-classes) 및 가상 요소(pseudo-elements)에 선택자 중첩을 사용
- 미디어 쿼리는 관련 선택자 안에 중첩 될 수 있다.

## 작명 관례 [→](https://sass-guidelin.es/#naming-conventions)

- 하이픈으로 구분 된 소문자 CSS 명명 규칙을 따르는 것이 가장 좋다.(일부 오류 제외)

## 주석

- CSS는 까다로운 언어이므로 충분한 설명을 제공해야한다. [→](https://sass-guidelin.es/#commenting)
- 공용 API를 설정하는 변수, 함수, 믹스인, 플레이스홀더의 경우 SassDoc 주석을 사용하시오.[→](https://sass-guidelin.es/#documentation)

## 변수

- 안전하게 변경할 수 있는 공용API의 변수에는 !dafault 플래그를 사용하시오. [→](https://sass-guidelin.es/#default-flag)
- 루트 레벨에서 !global 플래그를 사용하지 마시오.[→](https://sass-guidelin.es/#global-flag)

## Extend [→](https://sass-guidelin.es/#extend)

- 기존 CSS 선택자가 아니라 플레이스홀더를 확장하라.
- 부작용을 피하기 위해 가능한 확장하는 플레이스홀더가 적게 존재하도록 하라.