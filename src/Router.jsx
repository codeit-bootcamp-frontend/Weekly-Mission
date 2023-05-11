import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home";
import SharedPage from "@/pages/shared";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shared" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
