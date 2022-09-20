import { QuoteObject, List } from "./Types"
import { Link } from "react-router-dom"
import "../styles/main.styles.css"


export function selectRandom(array: QuoteObject[]): QuoteObject {

    return array[Math.floor(Math.random() * array.length)]
}



export function listOfCategories(list: List[]) {

    return list.map(({id, title, path}: List) => {

        return (
            <div>
                <ul className="categories">
                    <Link className="link--categories" to={path}><li className="category--item" key={id}>{title}</li></Link>
                </ul>
            </div>
        )
    })
}