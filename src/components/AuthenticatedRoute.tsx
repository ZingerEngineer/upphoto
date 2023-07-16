import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { auth } from '../index'
interface RouteProps {
  children: JSX.Element
}

export const AuthenticatedRoute = (props: RouteProps) => {
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
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Spinner
          width="w-20"
          height="h-20"
        />
      </div>
    )
  } else {
    return <>{children}</>
  }
}
