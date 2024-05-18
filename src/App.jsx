import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import UserInfo from './Page/UserInfo'
import Create from './Page/Create'
import Edit from './Page/Edit'
import Nav from './Component/Nav'
import Footer from './Component/Footer'

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <div><Nav/></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userinfo' element={<UserInfo setId={setId}/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit id={id}/>}/>
      </Routes>
      <div><Footer/></div>
      </BrowserRouter>
    </div>
  )
}

export default App