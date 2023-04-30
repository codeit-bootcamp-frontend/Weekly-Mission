import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6D6AFE;
    --light-primary: #6AE3FE;
    --red: #FF5B56;
    --black: #111322;
    --white: #FFFFFF;
    --gray1: #3E3E43;
    --gray2: #9FA6B2;
    --gray3: #CCD5E3;
    --gray4: #E7EFFB;
    --gray5: #F0F6FF;
    --gray6: #F5F5F5;
    --navbar-background: rgba(240, 246, 255, 0.5);
    --profile-email: #373740;
    --home-content-description: #6B6B6B;
    --footer-text1: #676767;
    --footer-text2: #CFCFCF;
    --eye-toggler: #4B5563;
    --kakaotalk-background: #F5E14B;
    --card-since: #666666;
    --card-date: #333333;
    --search-bar-text: #666666;
    --emphasis-left: var(--primary);
    --emphasis-right: #FF9F9F;
    --emphasis-1-left: #FE8A8A;
    --emphasis-1-right: #A4CEFF;
    --emphasis-2-left: #FFD88B;
    --emphasis-2-right: #6FBAFF;
    --emphasis-3-left: #6D7CCD;
    --emphasis-3-right: #528885;
    --emphasis-4-left: #3dd1eb;
    --emphasis-4-right: #3ea5d0;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background-color: var(--gray5);
    word-break: keep-all;
    font-family: 'Pretendard', sans-serif;
    font-size: 1.6rem;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    outline-color: var(--primary);
  }

  button {
    font-family: inherit;
    font-size: inherit;
    border: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
