import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainColumn } from "../components"
import { triviaLinks } from "../data/portfolioLinks"

const Trivia = ({mode}) => {

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
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Trivia