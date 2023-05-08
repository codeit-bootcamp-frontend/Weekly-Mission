import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import NotFoundPage from "pages/NotFoundPage";
import Layout from "components/Layout";
import AccountLayout from "components/AccountLayout";
import GlobalStyle from "components/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<AccountLayout />}>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
