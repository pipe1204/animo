import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainColumn } from "../components"
import { wefleetLinks } from "../data/portfolioLinks"

const Wefleet = ({mode}) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="WeFleet"
          description="A work project and own startup, a website and a dashboard for ecommerce stores to manage consignments and deliveries. I designed and developed the entire website / dashboard using React, Styled components and a some libraries. I co-founded and raised pre-seed capital for this startup which gave me a lot more experience as a person and professional."
          skills={["React", "JavaScript", "HTML", "CSS", 'APIs', "Styled Components"]}
          portfolioLinks={wefleetLinks}
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Wefleet