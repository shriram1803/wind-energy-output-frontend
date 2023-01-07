import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home,About,PredictLocation,PredictManual,CompareLocations } from './pages';
import { Nav } from 'react-bootstrap';
function App() {

  return (
    <div className="flex flex-col">
      <div className='flex bg-header text-white justify-end items-center '>
        <Nav variant="tabs" defaultActiveKey="/" className='flex flex-row'>
          <Nav.Item className='flex p-5 '>
            <Nav.Link href="/" className='flex p-3 hover:text-secondary'>Home</Nav.Link>
          
            <Nav.Link href="/about" className='flex p-3 hover:text-secondary'>About</Nav.Link>
          
            <Nav.Link href="/predictlocation" className='flex p-3 hover:text-secondary'>Predict Location</Nav.Link>
          
            <Nav.Link href="/predictmanual" className='flex p-3 hover:text-secondary'>Predict Manual</Nav.Link>
          
            <Nav.Link href="/comparelocations" className='flex p-3 hover:text-secondary'>Compare Locations</Nav.Link>
          </Nav.Item>
        </Nav>
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
