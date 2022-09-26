import "../../assets/styles/main.styles.css"
import { leftCategories } from '../../data/categories'
import gifImage from "../../assets/images/giphy.gif"
import { listOfCategories } from "../../assets/utils/Functions"

const LeftColumn = () => {

  console.log
    
  return (
    <div className={"left--column"}>
        <h5 className="categories--title">PORTFOLIO</h5>
        {listOfCategories(leftCategories)}
        <div className="gif--container--left">
          <img className="motivation--gif" src={gifImage} alt="loading..."/>
        </div>
    </div>
  )
}

export default LeftColumn