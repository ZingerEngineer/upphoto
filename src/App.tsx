import { Routes, Route } from 'react-router-dom'
import Uploader from './pages/Uploader'
import NotFound from './pages/NotFound'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthRoute } from './components/AuthRoute'
import { ToastContainer } from 'react-toastify'
export default function App() {
  return (
    <div
      className="App bg-gradient-to-t to-violet-950 from-violet-700"
      style={{ height: '100%' }}
    >
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<Welcome />}
        />
        <Route
          path="/uploader"
          element={
            <AuthRoute>
              <Uploader />
            </AuthRoute>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

