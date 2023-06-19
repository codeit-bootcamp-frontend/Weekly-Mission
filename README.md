# Linkbrary

<div>
  <a href="https://www.npmjs.com/package/npm"><img alt="npm Version" src="https://img.shields.io/badge/npm@latest-v9.6.6-CB3837?&logo=npm&logoColor=CB3837"></a>
  <a href="https://www.npmjs.com/package/react"><img alt="React npm Version" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=React&logoColor=61DAFB"></a>
  <a href="https://www.npmjs.com/package/next"><img alt="Next.js npm Version" src="https://img.shields.io/badge/Next.js-v13.4.5-000000?logo=Next.js&logoColor=000000"></a>
  <a href="https://www.npmjs.com/package/jest"><img alt="Jest npm version" src="https://img.shields.io/badge/Jest-v29.5.0-C21325?logo=Jest&logoColor=C21325"></a>
  <a href="https://www.npmjs.com/package/@vanilla-extract/css"><img alt="@vanilla-extract/css npm version" src="https://img.shields.io/badge/VanillaExtract-v1.11.1-FFC0CB"></a>
  <a href="https://www.npmjs.com/package/@tanstack/react-query"><img alt="@tanstack/react-query npm Version" src="https://img.shields.io/badge/ReactQuery-v4.29.13-FF4154"></a>
</div>

Linkbrary is a web application being developed to provide a web service that allows users to store, folder, share, search website links.

## Deploy Link

The application can be accessed at [https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/](https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/).

## Project Structure
```
linkbrary
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ LICENSE.md
├─ README.md
├─ jest.config.mjs
├─ next-sitemap.config.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ public /
├─ src
│  ├─ app
│  │  ├─ (basic)
│  │  │  ├─ faq
│  │  │  │  └─ page.tsx
│  │  │  ├─ folder
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ my-link
│  │  │  │  └─ page.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ privacy
│  │  │  │  └─ page.tsx
│  │  │  └─ shared
│  │  │     └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ forgot-password
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  ├─ robots.ts
│  │  ├─ signin
│  │  │  └─ page.tsx
│  │  ├─ signup
│  │  │  └─ page.tsx
│  │  └─ sitemap.ts
│  ├─ components
│  │  ├─ Account
│  │  │  ├─ ui
│  │  │  │  ├─ AccountInput
│  │  │  │  │  ├─ index.css.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ AccountLogo
│  │  │  │  │  ├─ index.css.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ EyeToggler
│  │  │  │     ├─ index.css.ts
│  │  │  │     └─ index.tsx
│  │  │  └─ utility
│  │  │     ├─ validateEmail.ts
│  │  │     └─ validatePassword.ts
│  │  ├─ Button
│  │  │  ├─ Button.css.ts
│  │  │  └─ index.tsx
│  │  ├─ ButtonLink
│  │  │  ├─ ButtonLink.css.ts
│  │  │  └─ index.tsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css.ts
│  │  │  └─ index.tsx
│  │  ├─ Modal
│  │  │  ├─ feature
│  │  │  ├─ index.tsx
│  │  │  └─ ui
│  │  ├─ Nav
│  │  │  ├─ Nav.css.ts
│  │  │  ├─ feature
│  │  │  ├─ index.tsx
│  │  │  └─ ui
│  │  ├─ PageFaq
│  │  │  └─ FaqMain
│  │  │     ├─ FaqMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageFolder
│  │  │  └─ FolderMain
│  │  │     ├─ FolderMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageForgatPassword
│  │  │  └─ ForgotPasswordMain
│  │  │     ├─ ForgotPasswordMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageHome
│  │  │  ├─ HomeHeader
│  │  │  │  ├─ HomeHeader.css.ts
│  │  │  │  └─ index.tsx
│  │  │  └─ HomeMain
│  │  │     ├─ HomeMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageMyLink
│  │  │  └─ MyLinkMain
│  │  │     ├─ MyLinkMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageNotFound
│  │  │  └─ NotFoundMain
│  │  │     ├─ NotFoundMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PagePrivacy
│  │  │  └─ PrivacyMain
│  │  │     ├─ PrivacyMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageShared
│  │  │  └─ SharedMain
│  │  │     ├─ SharedMain.css.ts
│  │  │     └─ index.tsx
│  │  ├─ PageSignin
│  │  │  └─ SigninMain
│  │  │     ├─ SigninMain.css.ts
│  │  │     ├─ feature
│  │  │     │  ├─ SigninForm.css.ts
│  │  │     │  └─ SigninForm.tsx
│  │  │     ├─ index.tsx
│  │  │     └─ ui
│  │  │        ├─ ForgotPasswordLink.css.ts
│  │  │        ├─ ForgotPasswordLink.tsx
│  │  │        ├─ SigninHeader.css.ts
│  │  │        ├─ SigninHeader.tsx
│  │  │        ├─ SocialSignin.css.ts
│  │  │        └─ SocialSignin.tsx
│  │  └─ PageSignup
│  │     └─ SignupMain
│  │        ├─ SignupMain.css.ts
│  │        ├─ feature
│  │        │  ├─ SignupForm.css.ts
│  │        │  └─ SignupForm.tsx
│  │        ├─ index.tsx
│  │        └─ ui
│  │           ├─ SignupHeader.css.ts
│  │           ├─ SignupHeader.tsx
│  │           ├─ SocialSignup.css.ts
│  │           └─ SocialSignup.tsx
│  └─ lib
│     ├─ api
│     │  └─ index.ts
│     ├─ global.css.ts
│     ├─ hooks
│     │  └─ index.tsx
│     ├─ theme.css.ts
│     ├─ types.d.ts
│     └─ utility
│        ├─ getElapsedTime.ts
│        ├─ getFormattedDate.ts
│        └─ validators.ts
└─ tsconfig.json

```

- public/: This folder is for storing static files.
- src/app/: This folder is for storing Next app-router files.
- src/components/: This folder is for storing React components.
- src/lib/: This folder stores axios instances, custom hooks, reusable functions, styles, type definitions files.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## Progress

- [x] next 프로젝트 생성
- [x] 필요한 패키지 설치
- [x] 시작 세팅
- [x] nx-space 폴더 구조 사용
- [x] App routing 구현
- [x] vanilla-extract로 마이그레이션
- [ ] 서버 컴포넌트 생성
- [ ] 클라이언트 컴포넌트 생성
- [ ] api 데이터, React Query 활용
- [ ] 리팩토링
- [ ] 무한 스크롤링 구현
- [ ] 모바일에서 카드 클릭시 기본 이벤트 제거
- [ ] 폴더 추가하기 팝업이 footer를 가리지 않도록 수정
- [ ] 유저 기능
- [ ] storybook 사용
- [ ] Jest로 test
