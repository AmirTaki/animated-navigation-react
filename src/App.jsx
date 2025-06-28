
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { CiMenuBurger } from "react-icons/ci";
function App() {
  const [showNav, setShowNav]  = useState(false);
  
  return (
    <>
      <header>
         <CiMenuBurger />
      </header>
     
      <Navbar />
  
    </>
  )
}

export default App
