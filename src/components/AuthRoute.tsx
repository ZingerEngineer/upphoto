import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { redirect } from 'react-router-dom'
import { auth } from '../index'
// interface User {
//   uid: string
//   email: string | null
//   displayName: string | null
// }
// interface Error {
//   errorMsg: string | null
// }
// interface AuthState {
//   currentUser: User | null
//   currentError: Error | null
// }
interface AuthRouteProps {
  children: JSX.Element
}

export const AuthRoute = (props: AuthRouteProps) => {
  const { children } = props
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const authCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoading(false)
    } else {
      navigate('/login')
    }
  })
  useEffect(() => {
    authCheck()
  }, [auth])
  if (isLoading) {
    return <p>Loading</p>
  } else {
    return <>{children}</>
  }
}
