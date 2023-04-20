# Site-URL: https://jeris-weekly-mission.netlify.app/

# Weekly-Mission 5
## ** 필수 요구사항**
- 상단 네비게이션바에는 “/api/sample/user”에서 받은 데이터를 반영하도록 수정해 주세요.
- https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sample/folder”에서 받은 데이터가 카드 컴포넌트에 들어가게 수정해 주세요.
- folder.owner, folder.name 의 데이터도 반영될 수 있도록 수정해 주세요.
- 카드 컴포넌트에서 createdAt 데이터 기준으로 현재 Date와 차이가
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