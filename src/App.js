import React from 'react'

import { Routes, Route } from "react-router-dom";

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation()
  return (
    <Routes>
      <Route path='/' exact element={<Join/>}></Route>
      <Route path='/chat' element={<Chat location={location}/>}></Route>
    </Routes>
  )
}

export default App