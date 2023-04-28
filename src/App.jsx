import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import GlobalNavigationBar from '@components/GlobalNavigationBar.jsx';
// import Home from '/src/pages/Home.jsx';
// import SharedContainer from '/src/pages/shared/SharedContainer.jsx';

function App() {
  return (
    <div className="App">
      <GlobalNavigationBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared" element={<SharedContainer />} />
      </Routes> */}
    </div>
  );
}

export default App;
