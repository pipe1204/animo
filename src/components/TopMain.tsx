import "../assets/styles/main.styles.css"
import { useEffect, useState } from "react"
import { selectRandom } from "../assets/utils/Functions"
import { quotes } from "../data/quotes"

//components
import Button from "./Button"

const TopMain = () => {

    const [quote, setquote] = useState(selectRandom(quotes))

  useEffect(() => {

    const interval = setInterval (
      () => setquote(selectRandom(quotes)) //Change quotes randomly
      ,10000
    );
    return () => {
      clearInterval(interval)
    };
    
  },[])

  return (
    <div className="topMain--div">
      <div className="div--quote">
        <h4 className="quote--sentence">"{quote.quote}"</h4>
        <p className="quote--author">{quote.author}</p>
        <Button />
      </div>
    </div>
  )
}

export default TopMain