import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { redirect } from 'react-router-dom'
import { auth } from '../index'
interface User {
  uid: string
  email: string | null
  displayName: string | null
}
interface Error {
  errorMsg: string | null
}
interface AuthState {
  currentUser: User | null
  currentError: Error | null
}
interface AuthRouteProps {
  children: JSX.Element
}

export const AuthRoute = (props: AuthRouteProps) => {
  const { children } = props
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentError, setCurrentError] = useState<Error | null>(null)
  const authCheck = onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })
      }
    },
    (error) => {
      if (error) {
        setCurrentError({
          errorMsg: error.message
        })
        console.log(error)
      }
    }
  )
  useEffect(() => {
    authCheck()
    setIsLoading(false)
    console.log(currentUser)
    console.log(currentError)
  }, [auth])
  return <div>{children}</div>
}
