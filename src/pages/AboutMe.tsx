import "../assets/styles/pages.css"
import Typewriter from 'typewriter-effect';


//components
import TopMain from "../components/TopMain"
import LeftColumn from "../components/LeftColumn"
import RightColumn from "../components/RightColumn"


const AboutMe: React.FC = ({mode}) => {

  return (
      <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <div className="about__content">
          <div className="welcome__content">
            <h1 className={mode ? "welcome__text" : "gradient__text"}>Hi there, I am <span className={mode ? "gradient__text" : ""}>Andre</span> (Everyone calls me Dre) and I am a <span className={mode ? "gradient__text" : ""}>Front-End Developer.</span></h1>
            <div className="skills__content">
              <p>Tech stack I use</p>
              <h2 className={mode ? "gradient__text" : ""}><Typewriter
                options={{
                  strings: ['React', 'JavaScript (ES6)', 'HTML', 'CSS', 'TypeScript', 'Bootstrap', 'Git', 'Python', 'NodeJS'],
                  autoStart: true,
                  loop: true,
                }}
              /></h2>
            </div>
            <p className="about__description">I am a Front end developer, passionate about design and technology with 2+ years of experience designing and building responsive web design. I love minimalism, beautiful simple design and I like to craft solid and scalable frontend products with great user experiences. From the moment I saw and printed “Hello World” in the console of my first application, I knew I was completely hooked into the wonderful world of software development. However, I have never thought of software development as “just a job”, it's offered me an engaging challenge to continually learn and improve my skills in creating high-quality software.</p>
          </div>
        </div>
      </div>
      <RightColumn/>
    </div>
  )
}

export default AboutMe