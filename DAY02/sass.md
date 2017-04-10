## Ruby Sass & Node Sass

### Ruby Sass

```sh
# Ruby Sass 설치

$ gem install sass		설치
$ gem list sass			설치 확인
$ gem list *			gem으로 설치 된 모든 파일 확인
$ gem uninstall sass
[버전 선택] 			 설치된 구버전 Sass 삭제
```

> sass -w -t expanded style.sass:style.css

```sh
# Ruby Sass 명령어

$ sass --help, -h							Sass 명령어 도움말 정보
$ sass --version, -v						설치 된 Sass 버전 정보 확인

$ sass [option] [input] [output]
$ sass input.sass output.css 				Sass파일을 CSS파일로 변환

$ sass --update input.sass output.css 		업데이트
$ sass --watch [input]:[output], -w 		Sass폴더 내부의 파일을 CSS 폴더 내부에 변환/저장하고 관찰함(중지: Ctrl+C)

$ sass --style compressed, -t 				아웃풋 스타일 (nested | expanded | compact | compressed)

$ sass --sourcemap							소스맵
$ sass-convert [OPTIONS] [INPUT] [OUTPUT] 	Sass와 SCSS파일 간 변환
```

### Node Sass

```sh
# Node Sass 설치

$ npm install node-sass					프로젝트 로컬 설치
$ npm install node-sass -g				컴퓨터 전역 설치 확인
$ npm show node-sass versions			노드사스의 버전을 출력해줌
$ npm show node-sass@4.* version		4버전으로 시작하는 노드 사스들을 출력
```

> node-sass -w -r sass -o css --output-style expanded --source-map ./map

```sh
# Node Sass 명령어

$ node-sass --help                     도움말 정보 출력
$ node-sass -v, --version              버전 정보 출력

$ node-sass -w, --watch                폴더/파일 변경 관찰 변환
$ node-sass -r, --recursive            폴더 내부 하위 폴더 안의 파일까지 모두 변환
$ node-sass -o, --output               출력 폴더 설정

$ node-sass --output-style             CSS 출력 스타일 설정 (nested | expanded | compact | compressed)
$ node-sass --indent-type              CSS 출력 들여쓰기 설정 (space | tab)
$ node-sass --indent-width             들여쓰기(스페이스 또는 탭) 폭 개수 설정 (MAX: 10)
$ node-sass --precision                프로그래밍 처리 과정에서 출력될 소수점 자리 수 설정
$ node-sass -i, --indented-syntax      Sass 코드를 스트림(stdin) 데이터로 처리 (vs scss)

$ node-sass -q, --quiet                오류를 제외하고는 기록을 멈춤(억제)
$ node-sass --linefeed                 줄바꿈 스타일 설정 (cr | crlf | lf | lfcr)

$ node-sass -x, --omit-source-map-url  소스맵(Source Map) URL을 출력 파일 주석으로 설정 안함
$ node-sass --source-comments          디버그(Debug) 정보를 출력에 포함
$ node-sass --source-map               소스맵(Source Map) 방출
$ node-sass --source-map-contents      맵 파일 안에 콘텐츠를 포함
$ node-sass --source-map-embed         소스매핑 URL을 데이터 URI에 포함
$ node-sass --source-map-root          소스맵이 방출될 기본 경로 설정
```

> Node.js에서 [sass-convert](https://www.npmjs.com/package/sass-convert)

### Ruby Sass 오류

* Windows 환경에서 한글(CP949) 오류 : 언어 인코딩 UTF-8로 설정 

```sh
$ sass -E utf-8 sass/style.scss css/style.css  # 인코딩 옵션 설정 -E utf-8
```

* 윈도우 설치 오류 - gem을 끌어오는 기본주소가 유효하지 않을 경우 : 
기존 주소 삭제하고 다른 주소로 add함

```sh
$ gem source --add https://s3.amazonaws.com/production.s3.rubygems.org/
$ gem source --remove https://rubygems.org/
```
	※ 'Can't add sources with gem' 오류 : [Stackoverflow](http://stackoverflow.com/questions/36042787/how-do-i-programmatically-add-http-rubygems-org-as-a-gem-source)