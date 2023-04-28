import React from "react";
import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import SharedPage from "./pages/SharedPage";
import SiginPage from "./pages/SiginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shared" element={<SharedPage />} />
        </Route>
        <Route path="/signin" element={<SiginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
