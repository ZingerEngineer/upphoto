import { Routes ,Route , BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About'
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>

    <div className="App">
    <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

