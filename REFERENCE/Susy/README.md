# Susy Doc 리뷰 

* [Susy](http://susy.oddbird.net/)
* [Susy Doc](http://susydocs.oddbird.net/en/latest/)
* [FDS yamoo9](https://github.com/chiabi88/FDS/blob/3rd_FDS/REFERENCES/Sass__Susy.md)

**Susy** 는 사용자가 복잡하지 않은 **math(레이아웃 계산)방식** 으로  
쉽게 그리드 시스템을 만들 수 있도록 도와주는 도구 :smile::+1:

## Grid Layout 기본 속성, 용어
| 용어  | 풀이 |
| ---|---|
| Margin | 마진 외부 여백 |    
| Row    | 로우(행) |
| Column | 컬럼(열) | 
| Gutter | 거터(열 간격) |
| Flowline | 플로우라인(기준선) |    
| Module | 모듈(교환 가능한 구성부분) |  
| Spatial | 여백 비어있는 공간 |

## INDEX

1. [Global Settings](1_Global-Settings.md)
2. [Shorthand](2_Shorthand.md)
3. [Toolkit](3_Toolkit.md)
 
Susy는 Sass의 **map** 타입 또는 **Shorthand Syntax(단축구문)** 과 같은 문법을 사용하여 settings(설정값)을 정의할 수 있음  
이 두 정의는 서로 바꿔서 사용할 수 있다.(호환성)

```scss
// $susy 변수에 map 형식으로 작성
$susy: (
  columns: 12, // 키: 값
  gutters: 1/4,
  math: fluid,
  output: float,
  gutter-position: inside,
);

// $shorthand 변수에 인수만 전달
$shorthand: 12 1/4 fluid float inside;
```

위 두 형식은 함수나 믹스인에 단일 인수로 전달 될 수 있고, 맵은 Shorthand의 일부로 사용할 수 있움

```scss
$susy: (
  columns: 12,
  gutters: .25,
  math: fluid,
);

@include layout($susy float inside);
```

***

* [Susy Tutorial (video)](https://leveluptutorials.com/tutorials/susy-tutorials)
* [Understanding Gutter Positions in Susy](https://zellwk.com/blog/susy-gutter-positions/)