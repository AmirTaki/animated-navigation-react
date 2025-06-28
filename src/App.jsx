
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { CiMenuBurger } from "react-icons/ci";
function App() {
  const [showNav, setShowNav]  = useState(false);

  return (
    <>
      <header>
        <CiMenuBurger  onClick={()=> setShowNav(!showNav)}/>
      </header>
      {/* {showNav && <Navbar /> } */}
      <Navbar show = {showNav} />
  
    </>
  )
}

export default App
