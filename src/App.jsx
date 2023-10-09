import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Path from './utils/path'
import Public from './pages/Public'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Page404 from './pages/PageNotFound'
function App() {
  return (
    <div className=''>
      <Routes>
        <Route path={Path.PUBLIC} element={<Public />}>
          <Route path={Path.HOME} element={<Home />} />
          <Route path={Path.LOGIN} element={<Login />} />
          <Route path={Path.REGISTER} element={<Register />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
