import '../assets/styles/pages.css'
import { PokemonLinks } from "../data/portfolioLinks"
import { Mode } from '../assets/utils/Interfaces'

//components
import TopMain from "../components/columns/TopMain"
import LeftColumn from "../components/columns/LeftColumn"
import RightColumn from "../components/columns/RightColumn"
import MainColumn from "../components/columns/MainColumn"

const PokemonWorld = ({mode}: Mode) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="PokemonWorld"
          description="The simple and nice a website looks, the more complex it is to develop. I really put some extra effort to make this project look as nice and friendly as I could. My son is a super fan of Pokemon and I wanted to develop a project in which I could see him smile and see his eyes light up when he is browsing through the pages to look for the different Pokemons. I developed this site using React and Redux with some Protected Routes and using the open Pokemon API. "
          skills={["React", "JavaScript", "HTML", "Axios", 'RESTApi', "Redux"]}
          portfolioLinks={PokemonLinks}
          frame='https://pokemon-world-zeta.vercel.app/'
          backgroundColor='#ffb88c'
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default PokemonWorld