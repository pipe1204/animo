import '../assets/styles/pages.css'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"

interface Mode {
  mode: string
}

const Contact = ({mode}: Mode) => {
  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <div className='content-icons rotate-scale-up-diag-2'>
          <a href='https://github.com/pipe1204' target="_blank"><BsGithub size={45} color={mode ? "white" : "2B283A"}/></a>
          <a className="linkedin-icon" href='https://www.linkedin.com/in/andres-f-gonzalez-r' target="_blank"><BsLinkedin size={45} color={mode ? "white" : "2B283A"}/></a>
          <a href="mailto:andresgon1204@gmail.com" target="_blank"><SiGmail size={45} color={mode ? "white" : "2B283A"}/></a>
        </div>
      </div>
      <RightColumn />
    </div>
  )
}

export default Contact