import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainColumn } from "../components"
import { countryLinks } from "../data/portfolioLinks"

const Countrypedia = ({mode}) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="Countrypedia"
          description="A web app that searches countries and provides their information including Covid related data. Uses React components and hooks utilizing a country API and COVID API to extract the data."
          skills={["React", "JavaScript", "HTML", "CSS", "REST APIs"]}
          portfolioLinks={countryLinks}
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Countrypedia