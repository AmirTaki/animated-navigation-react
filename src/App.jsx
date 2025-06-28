
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { CiMenuBurger } from "react-icons/ci";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const [showNav, setShowNav]  = useState(false);

  return (


        <Routes>
        <header>
            <CiMenuBurger  onClick={()=> setShowNav(!showNav)}/>
        </header>
        <Navbar show = {showNav} />
        <div className='main'>
          <Route   path = "/Home"  exact = {true} element = {<Home />}  > </Route>
          <Route path = "/About" element ={ <About />} > </Route>
        </div>

        </Routes>
   

  )
}

export default App
