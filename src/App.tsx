import './App.css'
import { Route, Switch } from 'react-router-dom';

//components
import Navbar from "./layout/Header/Navbar"

//views
import AllCategories from './pages/AllCategories';
import About from './pages/About';
import Professional from './pages/Professional';

const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllCategories} />
        <Route path="/about" component={About} />
        <Route path="/professionals" component={Professional} />
      </Switch>
    </div>
  )
}

export default App
