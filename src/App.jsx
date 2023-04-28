import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

// GLOBAL COMPONENTS
import GlobalNavigationBar from '@components/GlobalNavigationBar.jsx';
import GlobalFooter from '@components/GlobalFooter';

// PAGES
import Home from '@pages/Home.jsx';
import SharedContainer from '@pages/shared/SharedContainer.jsx';

function App() {
  return (
    <div className="App">
      <GlobalNavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared" element={<SharedContainer />} />
      </Routes>
      <GlobalFooter />
    </div>
  );
}

export default App;
