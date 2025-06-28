
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { CiMenuBurger } from "react-icons/ci";
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const [showNav, setShowNav]  = useState(false);

  return (
    <>
      <Router>
        <header>
          <CiMenuBurger  onClick={()=> setShowNav(!showNav)}/>
        </header>
        <Navbar show = {showNav} />
        <div className='main'>
          <Route path = "/" extact= {true} Component={Home}></Route>
          <Route path = "/" extact= {true} Component={About}></Route>
      
        </div>
      </Router>
    </>
  )
}

export default App
