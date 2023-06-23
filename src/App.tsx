import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
// import ProgressList from './components/ProgressList';
// import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
      <div
        className="App"
        style={{ height: '100%' }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </>
  )
}

