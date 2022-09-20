import "../assets/styles/main.styles.css"
import { leftCategories } from '../data/categories'
import gif from "../assets/images/motivation2.gif"
import { listOfCategories } from "../assets/utils/Functions"

const LeftColumn: React.FC= () => {
    
  return (
    <div className="left--column">
        <h5 className="categories--title">CATEGORIES</h5>
        {listOfCategories(leftCategories)}
        <div className="gif--container--left">
          <img className="motivation--gif" src={gif} alt="loading..."/>
        </div>
    </div>
  )
}

export default LeftColumn