import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Gnb from "./Gnb";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import SharedPage from "../pages/SharedPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import NotFound from "../pages/NotFound";
import "/src/components/App.css";

function BasicLayout() {
  return (
    <>
      <Gnb />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shared" element={<SharedPage />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
