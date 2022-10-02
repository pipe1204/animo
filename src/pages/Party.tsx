import "../assets/styles/pages.css"
import { partyLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const Party = ({mode}: Mode) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <div>
          <div></div>
          <MainColumn 
            mode={mode}
            title="Event Creator"
            description="An event invitation builder I developed as a part of a job interview for a Startup. They provided a Figma design and I had to design this app to be the closest possible to it. I also had to ad functionality using uncontrolled inputs for the form in which users create the event."
            skills={["React", "JavaScript", "Uncontrolled Input", "Figma", "HTML", "CSS"]}
            portfolioLinks={partyLinks}
            frame="https://party-creator.vercel.app/"
            backgroundColor="#8758FF"
          />
        </div>
      </div>
      <RightColumn />
    </div>
  )
}

export default Party