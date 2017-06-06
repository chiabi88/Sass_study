# Git 문제 해결방법

+ [Git 브랜치 배우기](http://learnbranch.urigit.com/)

## 1. Git 기본 명령어

### 1-1. Git 커밋 - `git commit`

커밋은 Git 저장소에 로컬 디렉토리에 있는 모든 파일에 대한 **스냅샷** 을 기록하는 것  
저장소의 _이전 버전과 다음 버전의 **변경내역("delta")**_ 을 저장 (전체를 복사하는 것이 아니라 가볍다)

```sh
> git commit
```

> `resolving deltas` :  저장소를 복제(clone) 하려면 그 모든 변경분(delta)를 풀어내야함. 그 명령행 결과

### 1-2. Git 브랜치 - `git branch [new branch name]`

특정 커밋에 대한 참조(reference), _하나의 커밋과 그 부모 커밋들을 포함하는 작업내역_   
많이 만들어도 메모리나 디스크 공간에 부담이 되지 않는다.(가볍다)

```sh
> git branch newBranch
> git commit // 변경 분을 커밋, master 브랜치만 변경 됨
```

#### 새 브런치로 이동 - `git checkout [new branch name]`

```sh
> git checkout newBranch // 변경분을 커밋하기 전 새 브런치로 이동
> git commit // 변경이 새 브런치에 기록
```

### 1-3. Git Merge (브랜치와 합치기1) - `git merge [합칠 브랜치] [대상 브랜치 | master]`

두 개의 부모(parent)를 가리키는 특별한 커밋을 만들어 냄  
(_한 부모의 모든 작업내역과 나머지 부모의 모든 작업, 그 두 부모의 모든 부모들의 작업내역_ 을 포함)

```sh
// ※ 각 브랜치에는 독립된 커밋이 있는 상태(작업 내역이 나뉘어 있는 상태)
> git merge newBranch master // master가 두 부모가 있는 커밋을 가리킴

> git merge master newBranch 
// newBrach를 master가 붙어 있는 커밋으로 이동, 두 브랜치가 모두 저장소의 모든 작업내역을 포함함
```

### 1-4. Git 리베이스 (브랜치와 합치기2) - `git rebase`

커밋들을 모아 복사한 뒤 다른 곳에 둠, 저장소의 커밋 로그와 이력을 깨끗하게 함  
(커밋들의 흐름을 보기 좋게 한 줄로 만든다)

### ※ 워킹 디렉토리 파일까지 안녕하고 싶다면... `git reset --hard HEAD`
