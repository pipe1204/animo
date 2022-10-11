import '../assets/styles/pages.css'
import { wefleetLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const Wefleet = ({mode}: Mode) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="WeFleet"
          description="A work project and startup of my own, a website and a dashboard for ecommerce stores to manage consignments and deliveries. I designed and developed the entire website / dashboard using React, Styled components and some libraries. I co-founded and raised pre-seed capital for this startup which gave me a lot more experience as a person and as a professional."
          skills={["React", "JavaScript", "HTML", "CSS", 'APIs', "Styled Components"]}
          portfolioLinks={wefleetLinks}
          frame='https://wefleet.co/'
          backgroundColor='#6F38C5'
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Wefleet