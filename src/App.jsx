// import { useState } from 'react'
// import {Route, Routes} from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <Navbar />
      {/* <Routes> */}
        {/* <Route path="/hero" element={<Hero />} /> */}
      {/* </Routes> */}
      <Hero />
    </>
  )
}

export default App
