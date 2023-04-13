import { Routes ,Route , BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar'
export default function App() {
  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="">
          
        </div>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

