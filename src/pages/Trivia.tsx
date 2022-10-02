import '../assets/styles/pages.css'
import { triviaLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const Trivia = ({mode}: Mode) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="Trivia"
          description="A trivia web app for people to have fun testing their knowledge. I built this app as my first ever project when learning how to code in JavaScript. it used plain Javascript and also a trivia API to get the data for the questions and answers. Also used HTML and CSS for the design."
          skills={["JavaScript", "HTML", "CSS", 'APIs']}
          portfolioLinks={triviaLinks}
          backgroundColor="#FF577F"
          frame="https://trivia-six.vercel.app/"
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Trivia