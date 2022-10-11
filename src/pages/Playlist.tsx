import '../assets/styles/pages.css'
import { playlistLinks } from "../data/aboutLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainAboutColumn from "../components/columns/MainAboutColumn"

const Playlist = ({mode}: Mode) => {
  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainAboutColumn 
          mode={mode}
          aboutLinks={playlistLinks}
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Playlist