# Linkbrary

This project is a web application being developed to provide a web service that allows users to store, folder, share, search website links.

## Deploy

The application can be accessed at [https://jeris-weekly-mission.netlify.app/](https://jeris-weekly-mission.netlify.app/).

## Project Structure

- public/: This folder is for storing static files.
- src/: This folder is for storing source code.
- src/assets/: This folder is for storing static asset files.
- src/components/: This folder is for storing React components.
- src/contexts/: This folder is used for storing React Context functions and constants in the project.
- src/pages/: This folder is for storing page components that implement routing using React Router Dom.
- src/utils/: This folder is for storing utility functions and constants used in the project.

## Libraries Used

### Frontend

- [React](https://react.dev/) v18.2.0
- [React Router Dom](https://reactrouter.com/en/6.10.0) v6.10.0
- [Vite](https://vitejs.dev/) v4.3.2
- [Storybook](https://storybook.js.org/) v7.0.7
- [Styled Components](https://styled-components.com/) v5.3.10

### State Management

- [React Query](https://tanstack.com/query/v3/) v3.39.3
- [Recoil](https://recoiljs.org/) v0.7.7

### Testing Tool

- [Jest](https://jestjs.io/) 29.5.0

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## Progress

### (전체 영향) 필수 요구사항

- [x] 리액트로 프로젝트를 진행해 주세요.
- [x] 반응형 디자인을 적용해 주세요. (아래는 width를 기준으로 한 분기 지점 입니다.)
  - PC: 1200px 이상
  - tablet: 768px 이상 ~ 1199px 이하
  - mobile: 375px 이상 ~ 767px 이하
  - 375px 미만 사이즈의 디자인은 고려하지 않음

### (전체 영향) 선택 요구사항

- [x] palette에 있는 color 값들을 css 변수로 등록해서 사용해 주세요.

### 필수 요구사항

- [x] “/shared” 페이지에서 아래 내용을 볼 수 있도록 구현합니다.
- [x] Linkbrary 로고 클릭하면 “/” 페이지로 이동합니다.
- [x] 검색 영역의 placeholder는 “원하는 링크를 검색해 보세요.”로 설정하고, 입력가능하게 해주세요.
- [x] card 컴포넌트 호버시 디자인에 맞게 배경색이 변하고, 이미지가 1.2배 확대되게 해주세요.
- [x] card 컴포넌트는 클릭하면, 새 창으로 “[https://www.codeit.kr](https://www.codeit.kr)”로 이동하도록 만들어 주세요.
- [x] card 컴포넌트에 별모양 아이콘 클릭시 회색, 파랑색으로 변하는 토글 스위치를 만들어 주세요.
- [x] card 컴포넌트에 설명글이 두 줄 보다 길어지면 ellipsis 설정해 주세요.
- [x] footer영역은 루트 페이지(“/”) 와 동일하게 만들어 주세요.
- [x] 상단 네비게이션바에는 “/api/sample/user”에서 받은 데이터를 반영하도록 수정해 주세요.
- [x] [https://bootcamp-api.codeit.kr/docs](https://bootcamp-api.codeit.kr/docs) 에 명세된 “/api/sample/folder”에서 받은 데이터가 카드 컴포넌트에 들어가게 수정해 주세요.
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

### (태블릿 크기) 필수 요구사항

- [x] 1100px 이상은 card 컴포넌트가 세 열로 배치되지만, 1100px 미만에서는 card컴포넌트가 두 열로 배치됩니다.
- [x] 이때 card 컴포넌트 크기, 열 간의 간격은 고정되어 있고, card 컴포넌트들을 감싸는 영역의 좌우 여백이 커지도록 합니다.

### (모바일 크기) 필수 요구사항

- [x] mobile 크기에서 card컴포넌트는 하나의 열로 배치됩니다.
- [x] card 컴포넌트 크기는 고정되어 있고, card 컴포넌트들이 들어있는 영역의 좌우 여백이 커지도록 합니다.
