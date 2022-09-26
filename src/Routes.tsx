import {Routes, Route} from "react-router-dom"
import { AboutMe, Fundices, Trivia, WeatherApp, Countrypedia, Wefleet, Onedoor, Courses, Reads, Playlist, Contact } from "./pages"
import { Mode } from "./assets/utils/Interfaces"

const MainRoutes = ({mode}: Mode) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<AboutMe mode={mode}/>}/>
            <Route path="/weather-app" element={<WeatherApp mode={mode}/>}/>
            <Route path="/fundices" element={<Fundices mode={mode}/>}/>
            <Route path="/trivia" element={<Trivia mode={mode}/>}/>
            <Route path="/countrypedia" element={<Countrypedia mode={mode}/>}/>
            <Route path="/wefleet" element={<Wefleet mode={mode}/>}/>
            <Route path="/onedoor" element={<Onedoor mode={mode}/>}/>
            <Route path="/courses" element={<Courses mode={mode}/>}/>
            <Route path="/reads" element={<Reads mode={mode}/>}/>
            <Route path="/playlist" element={<Playlist mode={mode}/>}/>
            <Route path="/contact" element={<Contact mode={mode}/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes