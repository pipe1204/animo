import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainAboutColumn } from "../components"
import { coursesLinks } from "../data/aboutLinks"

const Courses = ({mode}) => {
  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainAboutColumn 
          mode={mode}
          links={coursesLinks}
        />
        <h2>Learn something new everyday and continue learning 💪🏼</h2>
      </div>
      <RightColumn />
    </div>
  )
}

export default Courses