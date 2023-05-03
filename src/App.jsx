import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import { UserIdProvider } from "contexts/UserIdContext";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import FaqPage from "pages/FaqPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import MyLinkPage from "pages/MyLinkPage";
import PrivacyPage from "pages/PrivacyPage";
import SharedPage from "pages/SharedPage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import DefaultLayout from "components/DefaultLayout";
import AccountLayout from "components/AccountLayout";
import GlobalStyle from "components/GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <UserIdProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="my-link" element={<MyLinkPage />} />
                <Route path="shared" element={<SharedPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
              <Route path="/" element={<AccountLayout />}>
                <Route path="signin" element={<SigninPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route
                  path="forgot-password"
                  element={<ForgotPasswordPage />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserIdProvider>
      </HelmetProvider>
    </RecoilRoot>
  );
}

export default App;
