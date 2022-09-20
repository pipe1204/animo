import "../assets/styles/main.styles.css"


//components
import TopMain from "../components/TopMain"
import LeftColumn from "../components/LeftColumn"
import RightColumn from "../components/RightColumn"


const AllCategories: React.FC = () => {

  return (
    <div className='main--div'>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
      </div>
      <RightColumn />
    </div>
  )
}

export default AllCategories