import '../assets/styles/pages.css'
import { countryLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const Countrypedia = ({mode}: Mode) => {

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
          frame='https://github.com/pipe1204/countrypedia'
          backgroundColor='#38E54D'
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Countrypedia