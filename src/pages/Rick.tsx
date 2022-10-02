import "../assets/styles/pages.css"
import { rickLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const Rick = ({mode}: Mode) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <div>
          <div></div>
          <MainColumn 
            mode={mode}
            title="Rick And Morty"
            description="Without a doubt, one of the best APIs out there, Rick and Morty REST and GraphQL API is an enjoyable and playful way to use APIs. I designed this web App that allows users to search either by universe or by characters using Controlled and Uncontrolled inputs to display cards and show a modal with the name of the characters depending on the input from the user. "
            skills={["React", "JavaScript", "Uncontrolled Input", "Controlled Input", "Axios", "RESTApi", "HTML", "CSS"]}
            portfolioLinks={rickLinks}
            frame="https://rickandmorty-seven-jade.vercel.app/"
            backgroundColor="#EFE6C2"
          />
        </div>
      </div>
      <RightColumn />
    </div>
  )
}

export default Rick