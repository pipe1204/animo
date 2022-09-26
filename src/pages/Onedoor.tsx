import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainColumn } from "../components"
import { onedoorLinks } from "../data/portfolioLinks"

const Onedoor = ({mode}) => {

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
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Onedoor