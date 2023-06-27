# week11 & 12

## 전체

- 반응형 디자인 적용
- 프로젝트에 TypeScript를 적용

## shared 페이지

- “/shared?user={sharedUserId}&folder={folderId}” 페이지로 접근 가능
- https://bootcamp-api.codeit.kr/api/users/{userId}/links?folderId={folderId}에서 받은 데이터가 카드 컴포넌트에 들어가게 수정
- 상단 네비게이션바에는 https://bootcamp-api.codeit.kr/api/users/{currentUserId} 에서 받은 데이터를 반영하도록 수정(currentUserId는 `3`으로 임의로 설정)
- 코드잇 로고 이미지, @코드잇 에는 https://bootcamp-api.codeit.kr/api/users/{sharedUserId} 에서 받은 데이터를 반영하도록 수정
- ⭐️ 즐겨찾기 부분에는 https://bootcamp-api.codeit.kr/api/users/{sharedUserId}/folders/{folderId}에서 받은 데이터를 반영하도록 수정

## folder 페이지

- 폴더 목록은 https://bootcamp-api.codeit.kr/api/users/{userId}/folders 데이터를 활용
- 전체: `/folder`, {폴더 이름}: `/folder/{folderId}`, 각각의 탭과 url이 대응하고 탭 클릭시 url로 이동하도록, 반대로 해당 url로 접근 시 url에 해당하는 탭이 선택되도록 설정
- '전체' 선택 시 https://bootcamp-api.codeit.kr/api/users/{userId}/links 데이터가 보이고, 이외의 탭 클릭 시 https://bootcamp-api.codeit.kr/api/users/{userId}/links?folderId={folderId} 데이터가 보이고, 데이터가 없는 경우 비어있는 폴더 화면이 보이도록 설정
- 상단 네비게이션바에는 https://bootcamp-api.codeit.kr/api/users/{userId} 에서 받은 데이터를 반영하도록 수정
- 폴더 추가, 공유, 이름 변경, 삭제 버튼 클릭 시 모달이 각각의 모달이 뜨도록 해주세요.
- 케밥 버튼 클릭 시 “삭제하기”, “폴더에 추가” 옵션이 있는 팝오버가 뜨도록 해주세요.
