import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SharedPage from '@/pages/SharedPage';
import SigninPage from '@/pages/SigninPage';
import PrivacyPage from '@/pages/PrivacyPage';
import FAQPage from '@/pages/FAQPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<HomePage />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
