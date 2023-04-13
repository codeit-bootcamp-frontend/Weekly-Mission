# Weekly-Mission 1

## 필수 요구사항
- PC사이즈만 고려해 주어진 디자인을 구현합니다. (단, 글자와 버튼의 그라데이션은 무시합니다.)

- 최상단에 Linkbrary 아이콘은 클릭 가능함을 알 수 있도록 마우스가 위로 올라갔을 때, 커서가 손가락 모양으로 바뀌어야 하고, 클릭 시 루트 페이지(‘/’)로 이동 합니다.

- ‘로그인’은 클릭 가능함을 알 수 있어야 하고, 클릭 시 로그인 페이지(‘/signin’)로 이동 합니다.

 - ‘링크 추가하기’는 클릭 가능함을 알 수 있어야 합니다.

- ‘Privacy Policy’, ‘FAQ’는 클릭 가능함을 알 수 있어야 하고, 클릭 시 각각 개인정보보호 페이지(‘/privacy’), FAQ 페이지(‘/faq’)로 이동 합니다.

- 우측 하단에 페이스북, 트위터, 유튜브, 인스타그램 아이콘은 클릭 가능함을 알 수 있어야 하고, 클릭 시 각각의 홈페이지로 이동 합니다.

- 페이스북, 카카오톡, 슬랙에서 사이트 링크 공유 시 아래 첫번째 예시와 같은 미리보기를 볼 수 있어야 합니다. 미리보기에서 사이트 주소, 제목, 설명, 이미지는 자유롭게 설정하세요.

## 추가 요구사항

- 글자와 버튼에 그라데이션을 적용합니다.
      브라우저 너비가 1920px을 넘어갈 경우 내부 요소들의 위치는 고정되고, 여백만 커지도록 해주세요.
      
- 트위터에서 사이트 링크 공유 시 아래 두번째 예시와 같은 미리보기를 볼 수 있어야 합니다. (미리보기에 들어갈 내용은 페이스북 등에 공유할 때 설정한 데이터와 동일한 데이터를 보여줘야 합니다.)

# Weekly-Mission 2

## (전체 영향) 필수 요구사항
- 반응형 디자인을 적용해 주세요. (아래는 width를 기준으로 한 분기 지점 입니다.)
  - PC: 1200px 이상
  - tablet: 768px 이상 ~ 1199px 이하
  - mobile: 375px 이상 ~ 767px 이하
  - 375px 미만 사이즈의 디자인은 고려하지 않음

- 아래로 스크롤 해도  “Linkbrary”와 “로그인" 버튼이 들어있는 gnb 영역이 최상단에 고정되어 볼 수 있도록 하세요.

- pc, tablet 사이즈의 이미지는 고정값을 사용하고, mobile 사이즈는 좌우 여백 32px을 제외한 이미지 영역이 꽉 찰 수 있도록 해주세요. 이때 가로가 커지는 비율에 맞춰 세로도 커지면 됩니다.

## 필수 요구사항
- PC 사이즈에서 기기의 width가
  - 1920px 보다 작아질 때, “Linkbrary” 로고의 왼쪽 여백 200px “로그인" 버튼의 오른쪽 여백 200px이 유지되고, 화면의 너비가 작아질수록 두 요소간 거리가 가까워져야 합니다.

  - 1920px 이상이면 내부에 있는 요소의 위치는 landing/pc 와 동일한 간격을 유지하며 가운데 정렬해야 합니다.

  - 1920px 보다 작아질 때, 최하단에 있는 “codeit-2023”의 왼쪽 여백 104px과 SNS 아이콘들의 오른쪽 여백 104px을 유지하면서 가운데 있는 Privacy Policy, FAQ 요소와 각각 동일한 간격을 유지하며 가까워져야 합니다.

- tablet 사이즈에서 기기의 width가
  - 1199px 에서 작아질 때 “Linkbrary” 로고와 “로그인” 버튼 사이의 간격은 유지하고 좌우 여백이 줄어듭니다.
  - 863px 보다 작아질 때, “Linkbrary” 로고의 왼쪽에 여백 32px, “로그인” 버튼 오른쪽 여백 32px이 최소 여백을 유지할 수 있도록 “Linkbrary” 로고와 “로그인" 버튼의 간격이 가까워지도록 합니다.

- mobile 사이즈에서 기기의 width에 관계없이 전체 좌우 여백이 32px을 유지하도록 하고, 이미지 요소의 경우 좌우 여백 32px을 제외하고 이미지가 꽉 찰 수 있도록 width와 height가 원본의 비율대로 커지도록 합니다.

- mobile 사이즈 width가 커지면, Privacy Policy, FAQ가 있는 영역과 SNS 아이콘들이 있는 영역의 간격이 커지도록 하세요.

## (전체 영향) 선택 요구사항
- 사용자의 브라우저 font-size가 크고 작아짐에 따라 페이지의 요소간 간격, 요소의 크기, font-size 등 모든 크기와 관련된 값이 크고 작아지도록 설정 하세요.

## 선택 요구사항
- mobile 사이즈에서만 제목, 이미지, 설명의 순서대로 배치해 주세요.

# Weekly-Mission 3

## (전체 영향) 필수 요구사항
- 로고 클릭시 루트 페이지(“/”)로 이동해야 합니다.

- 로그인 페이지, 회원가입 페이지 모두 로고위 상단 여백이 동일해야 합니다.

- input 요소에 focus in 일 때, input 안에 문자열은 검정색이어야 하고, 파랑색 테두리가 생겨야 합니다.

- input 요소에 focus out 일 때, input 안에 문자열과 테두리는 회색이어야 합니다.

- SNS 아이콘들은 클릭 가능함을 확인할 수 있고, 클릭시 각각 “https://www.google.com/”, “https://www.kakaocorp.com/page/” 으로 이동합니다.

## (전체 영향) 선택 요구사항
- 비밀번호 input 요소에 비밀번호를 확인할 수 있는 아이콘을 추가합니다.

- 비밀번호를 확인할 수 있는 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.

## (로그인 페이지) 필수 요구사항
- 회원 가입하기는 클릭 가능함을 확인할 수 있고, 클릭시 “/signup” 페이지로 이동합니다.

- 이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.

- 이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다.

- 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/my-link” 페이지로 이동합니다.

- 이외의 로그인 시도의 경우, “이메일과 비밀번호를 확인해주세요.” 메세지가 담긴 alert 을 띄워 주세요.

- 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.

- 비밀번호 찾기는 클릭 가능함을 확인할 수 있고, 클릭시 “/forgot-password” 페이지로 이동합니다.

## (회원가입 페이지) 필수 요구사항
- 로그인 하기는 클릭 가능함을 확인할 수 있고, 클릭시 “/signin” 페이지로 이동합니다.

- 이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.

- 이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다.

- 이메일 input에서 focus out 일 때, input 값이 test@codeit.com 일 경우, alert으로 “이미 사용 중인 아이디입니다.” 메세지를 보입니다.

- 비밀번호 input에서 focus out 일 때, 값이 없거나 문자열만 있거나 숫자만 있는 경우, alert으로 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 메세지를 보입니다.

- 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 부분을 alert 메세지로 알립니다.

- 이외의 유효한 회원가입 시도의 경우, “/my-link”로 이동합니다.

- 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.

## (모바일 크기) 필수 요구사항
- 375px 보다 작은 크기의 기기는 고려하지 않습니다.

- 좌우 여백 32px 제외하고 내부 요소들이 너비를 모두 차지합니다.

- 내부 요소들의 너비는 기기의 너비가 커질수록 커지지만 400px을 넘지 않습니다.
