import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import App from "components/App";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import FaqPage from "pages/FaqPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import MyLinkPage from "pages/MyLinkPage";
import PrivacyPage from "pages/PrivacyPage";
import SharedPage from "pages/SharedPage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="my-link" element={<MyLinkPage />} />
              <Route path="shared" element={<SharedPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="signin" element={<SigninPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </RecoilRoot>
  </React.StrictMode>
);
