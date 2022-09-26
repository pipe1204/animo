import './App.css'
import Routes from "../src/Routes"

//components
import Navbar from "./layout/Header/Navbar"
import { useState } from 'react'
import AboutMe from './pages/AboutMe'

const App: React.FC = () => {

  const [darkMode, setDarkMode] = useState(false)

  function handleToggle() {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className={darkMode ? 'app-dark' : "App"}>
      <Navbar 
        dark={handleToggle}
        mode={darkMode}
      />
      <Routes 
        mode={darkMode}
      />
    </div>
  )
}

export default App
