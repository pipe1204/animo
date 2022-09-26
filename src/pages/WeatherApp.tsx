import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainColumn } from "../components"
import { weatherLinks } from "../data/portfolioLinks"

const WeatherApp = ({mode}) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="Weather App"
          description="Simple yet beautifly designed weather web application. I designed this application as a part of a project for my Full Stack Developer program. I developed this web app using JavaScript and React. Also I used Axios to call the REST API for the Open Weather APIs and check on the user current location as well as allowing the users to randomly see the weather in other cities."
          skills={["React", "JavaScript", "Axios", "REST API", "HTML", "CSS"]}
          portfolioLinks={weatherLinks}
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default WeatherApp