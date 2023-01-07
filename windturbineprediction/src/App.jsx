import React, { useState } from 'react'
import { Route, Routes,Link } from 'react-router-dom';
import { Home,About,PredictLocation,PredictManual,CompareLocations } from './pages';
import { Nav } from 'react-bootstrap';
import { logo } from './assets';
function App() {
  return (
    <div className="flex flex-col">
      <div className='flex bg-header text-white justify-between items-center '>
        <div className='flex mx-5'>
          <img src={logo} className='h-20 w-20'/>
        </div>
        <div className='flex'>
          <Nav variant="tabs" defaultActiveKey="/" className='flex flex-row'>
            <Nav.Item className='flex p-5 '>
              <Link to={"/"} className='flex p-5 hover:scale-105'>Home</Link>
              <Link to={"/about"} className='flex p-5 hover:scale-105'>About</Link>
              <Link to={"/predictlocation" }className='flex p-5 hover:scale-105'>Predict Location</Link>
              <Link to={"/predictmanual"} className='flex p-5 hover:scale-105'>Predict Manual</Link>
              <Link to={"/comparelocations"} className='flex p-5 hover:scale-105'>Compare Locations</Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className='flex'>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/predictlocation' element={<PredictLocation/>}/> 
          <Route path='/predictmanual' element={<PredictManual/>}/> 
          <Route path='/comparelocations' element={<CompareLocations/>}/> 
        </Routes>
      </div>
    </div>
  )
}

export default App
