import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/HomePage";
import SharedPage from "@/pages/SharedPage";

//style
import GlobalStyle from "@/styles/GlobalStyles";

// contextAPI
import { UserProvider } from "@/contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shared" element={<SharedPage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
