import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SharedPage from "@/pages/SharedPage";
import SignInPage from "@/pages/SignInPage";
import PrivacyPage from "@/pages/PrivacyPage";
import FAQPage from "@/pages/FAQPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
