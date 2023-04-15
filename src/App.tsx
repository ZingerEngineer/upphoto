import { Routes ,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About'
import ProgressList from './components/ProgressList';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
    <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
    </Routes>
    </div>
    </>
  );
}

