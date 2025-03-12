import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import Form2 from './Form'
function App() {

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/about' element={<h1>this is about page</h1>}/> //path ra element
        <Route path='/contact' element={<h1>this is contact page</h1>}/> //path ra element
        <Route path='/Form2' element={<Form2 />}/> //path ra element
        </Routes>
      </BrowserRouter>
    )
}

export default App
