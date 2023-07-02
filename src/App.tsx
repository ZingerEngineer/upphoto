import { Routes, Route } from 'react-router-dom'
import Uploader from './pages/Uploader'
import NotFound from './pages/NotFound'
export default function App() {
  return (
    <>
      <div
        className="App bg-gradient-to-t to-violet-950 from-violet-700"
        style={{ height: '100%' }}
      >
        <Routes>
          <Route
            path="/"
            element={<Uploader />}
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

