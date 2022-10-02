import '../assets/styles/pages.css'
import { onedoorLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const Onedoor = ({mode}: Mode) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="Onedoor"
          description="My first project as a professional developer, a web app that allows business owners consolidate all their communication channels into one single link. I worked as a Junior front-End Developer remote in Medellin, Colombia and collaborated with Senior developers to build a business that will be then sold to a bigger Startup in Colombia. I worked on the front end of the application using ReactJS, CSS and a few libraries."
          skills={["React", "JavaScript", "HTML", "CSS", 'APIs']}
          portfolioLinks={onedoorLinks}
          frame='https://github.com/'
          backgroundColor='#87A2FB'
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Onedoor