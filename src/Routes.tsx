import {Routes, Route} from "react-router-dom"
import { Mode } from "./assets/utils/Interfaces"

import AboutMe from "./pages/AboutMe"
import Fundices from "./pages/Fundices"
import Trivia from "./pages/Trivia"
import WeatherApp from "./pages/WeatherApp"
import Countrypedia from "./pages/Countrypedia"
import Wefleet from "./pages/Wefleet"
import Onedoor from "./pages/Onedoor"
import Courses from "./pages/Courses"
import Reads from "./pages/Reads"
import Playlist from "./pages/Playlist"
import Contact from "./pages/Contact"
import Party from "./pages/Party"
import Rick from "./pages/Rick"

const MainRoutes = ({mode}: Mode) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<AboutMe mode={mode}/>}/>
            <Route path="/weather-app" element={<WeatherApp mode={mode}/>}/>
            <Route path="/party" element={<Party mode={mode}/>}/>
            <Route path="/rick-and-morty" element={<Rick mode={mode}/>}/>
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