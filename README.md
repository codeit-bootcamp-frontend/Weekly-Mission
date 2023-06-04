# Week 6 Mission

## Requirements

### (전체 영향) 필수 요구사항

- [x] 리액트로 프로젝트를 진행해 주세요.
- [x] 반응형 디자인을 적용해 주세요. (아래는 width를 기준으로 한 분기 지점 입니다.)
  - PC: 1200px 이상
  - tablet: 768px 이상 ~ 1199px 이하
  - mobile: 375px 이상 ~ 767px 이하
  - 375px 미만 사이즈의 디자인은 고려하지 않음
- [x] https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sample/folder”에서 받은 데이터가 카드 컴포넌트에 들어가게 수정해 주세요.
- [x] folder.owner, folder.name 의 데이터도 반영될 수 있도록 수정해 주세요.

- [x] 카드 컴포넌트에서 createdAt 데이터 기준으로 현재 Date와 차이가

  - 2분 미만은 “1 minute ago”
  - 59분 이하는 “OO minutes ago”
  - 60분 이상은 “1 hour ago”
  - 23시간 이하는 “OO hours ago”
  - 24시간 이상은 “1 day ago”
  - 30일 이하는 “OO days ago”
  - 31일 이상은 “1 month ago”
  - 11달 이하는 “OO months ago”
  - 12달 이상은 “1 year ago”
  - OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”

- [x] “/shared” 페이지에서 아래 내용을 볼 수 있도록 구현합니다.
- [x] Linkbrary 로고 클릭하면 “/” 페이지로 이동합니다.
- [x] 검색 영역의 placeholder는 “원하는 링크를 검색해 보세요.”로 설정하고, 입력가능하게 해주세요.
- [x] card 컴포넌트 호버시 디자인에 맞게 배경색이 변하고, 이미지가 1.2배 확대되게 해주세요.
- [x] card 컴포넌트는 클릭하면, 새 창으로 “https://www.codeit.kr”로 이동하도록 만들어 주세요.
- [x] card 컴포넌트에 별모양 아이콘 클릭시 회색, 파랑색으로 변하는 토글 스위치를 만들어 주세요.
- [x] card 컴포넌트에 설명글이 두 줄 보다 길어지면 ellipsis 설정해 주세요.
- [x] footer영역은 루트 페이지(“/”) 와 동일하게 만들어 주세요.
- [x] 상단 네비게이션바에는 “/api/sample/user”에서 받은 데이터를 반영하도록 수정해 주세요.

- [x] mobile 크기에서 card컴포넌트는 하나의 열로 배치됩니다.
- [x] card 컴포넌트 크기는 고정되어 있고, card 컴포넌트들이 들어있는 영역의 좌우 여백이 커지도록 합니다.

### 선택 요구사항

- [x] palette에 있는 color값들을 css 변수로 등록해서 사용해 주세요.

## Key Changes

- 웹 컴포넌트로 구현했던 지난 shared 페이지를 react로 변환했습니다.
- CRA가 아닌 vite로 리액트 프로젝트를 생성했습니다.
- api fetch는 custom Hook을 만들어서 사용했습니다.
- gnb에 사용되는 user 정보는 contextAPI로 전역에서 사용가능하도록 구현했습니다.
-

## Results

#### [링크](주소)👈이곳에서 확인 가능합니다!

![image](이미지url)

<hr>

### Reference

[왜 Create React App 대신 Vite일까](https://velog.io/@jaewoneee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8-Create-React-App-vs-Vite)
[Vite 3.0 vs. Create React App: Comparison and migration guide](https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/)

### Questions

- 질문s
