import { FormatProps } from "../../assets/utils/Interfaces"

const MainAboutColumn = ({mode, aboutLinks}: FormatProps) => {

  let courses = aboutLinks.map(({id, title, path, company}) => {

    return (
        <div className='mainAbout__content'>
            <a className="gradient__text" key={id} href={path}>{title}</a><span className={mode ? "dark__course-company" : "course__company"}>{company}</span>
        </div>
    )
  })
    
  return (
    <div className='mainAbout__content__container rotate-bl'>
      <h4 className="learn">💪🏼 Learn something new everyday and continue learning 💪🏼</h4>
        {courses}
    </div>
  )
}

export default MainAboutColumn