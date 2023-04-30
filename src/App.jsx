import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Routes>
     <Route path='/' element={<Shared/>}></Route>
    </Routes>
  )
}

export default App
