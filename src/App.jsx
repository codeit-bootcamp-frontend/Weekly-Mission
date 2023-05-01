import './App.css'
import { Routes, Route } from 'react-router-dom'
import Shared from './pages/Shared'

function App() {
  return (
    <Routes>
     <Route path='/shared' element={<Shared/>}/>
    </Routes>
  )
}

export default App
