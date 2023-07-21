import { Routes, Route } from 'react-router-dom'
import Uploader from './pages/Uploader'
import NotFound from './pages/NotFound'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthenticatedRoute } from './components/AuthenticatedRoute'
import { UnAuthenticatedRoute } from './components/UnAuthenticatedRoute'
import { ToastContainer } from 'react-toastify'
import { userDataContext } from './index'
import { auth } from './index'
export default function App() {
  return (
    <div
      className="App bg-gradient-to-t to-violet-950 from-violet-700"
      style={{ height: '100%' }}
    >
      <ToastContainer />
      <userDataContext.Provider value={auth}>
        <Routes>
          <Route
            path="/"
            element={<Welcome />}
          />
          <Route
            path="/uploader"
            element={
              <AuthenticatedRoute>
                <Uploader />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <UnAuthenticatedRoute>
                <Login />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <UnAuthenticatedRoute>
                <Signup />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </userDataContext.Provider>
    </div>
  )
}
