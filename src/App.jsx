import '/src/App.css'
import { Routes, Route } from 'react-router-dom'
import Shared from '/src/pages/Shared.jsx'
import Home from '/src/pages/Home.jsx'

function App() {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/shared' element={<Shared/>}/>
    </Routes>
  )
}

export default App
