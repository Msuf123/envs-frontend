import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Profile from './Routes/Profile/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Routes>
        <Route  element={<Home></Home>}></Route>
        <Route element={<Profile></Profile>}></Route>
      </Routes >
     </div>
    </>
  )
}

export default App
