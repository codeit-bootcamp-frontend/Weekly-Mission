import { Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalNavigationBar from './components/GlobalNavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalNavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
