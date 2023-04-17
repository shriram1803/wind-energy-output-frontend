import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home,About,PredictLocation,PredictManual,CompareLocations, Navbar, Dashboard } from './pages';

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className='w-full z-[10] bg-header'>
        <Navbar/>
      </div>
      
      <div className='flex'>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/predictlocation' element={<PredictLocation/>}/> 
          <Route path='/predictmanual' element={<PredictManual/>}/> 
          <Route path='/comparelocations' element={<CompareLocations/>}/> 
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>

    </div>
  )
}

export default App
