import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../index'
const signupUser = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  const user = userCredential.user
  console.log(user)
}
const signOutUser = async () => {
  await signOut(auth)
  localStorage.removeItem('accessToken')
}
const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const accessToken = await userCredential.user.getIdToken()
  localStorage.setItem('accessToken', accessToken)
}
export { loginUser, signOutUser, signupUser }
