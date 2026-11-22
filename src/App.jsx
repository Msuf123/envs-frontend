import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Profile from './Routes/Profile/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes >
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes >
     
    </>
  )
}

export default App
