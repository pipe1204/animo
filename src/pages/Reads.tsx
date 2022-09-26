import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainAboutColumn } from "../components"
import { readsLinks } from "../data/aboutLinks"

const Reads = ({mode}) => {
  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainAboutColumn 
          mode={mode}
          links={readsLinks}
        />
        <h2>Learn something new everyday and continue learning 💪🏼</h2>
      </div>
      <RightColumn />
    </div>
  )
}

export default Reads