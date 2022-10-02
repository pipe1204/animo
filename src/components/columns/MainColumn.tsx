
import { MainColumnProps } from "../../assets/utils/Interfaces"

const MainColumn = ({mode, title, skills, description, portfolioLinks, backgroundColor, frame}: MainColumnProps) => {

  let skillsUsed = skills.map((name) => {
    return <span className={mode ? 'tech-stack' : 'tech__stack__light gradient__text'}>{name}</span>
  })

  let links = portfolioLinks.map(({id, title, link}) => {
    return <a href={link} target="_blank" key={id}>{title}</a>
  })
  return (
        <div className='portfolio__container scale-up-center'>
          <div className='portfolio__description'>
            <h1 className='gradient__text'>{title}</h1>
            <p>{description}</p>
          </div>
          <div className='portfolio__content__tech-stack'>
            {skillsUsed}
          </div>
          <div className={mode ? " portfolio__links dark__mode__links" : 'portfolio__links'}>
            {links}
          </div>
          <div className="iframe__main">
            <div className="background__box" style={{backgroundColor: backgroundColor}}></div>
            <div className="iframe__content">
              <iframe src={frame}></iframe>
            </div>
          </div>
        </div> 
  )
}

export default MainColumn