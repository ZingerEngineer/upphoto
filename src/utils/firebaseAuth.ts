import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from 'firebase/auth'

import { auth } from '../index'
const googleAuthProvider = new GoogleAuthProvider()
const faceBookAuthProvider = new FacebookAuthProvider()

const signInWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleAuthProvider)
  const accessToken = await userCredential.user.getIdToken()
  localStorage.setItem('accessToken', accessToken)
  return {
    userImage: userCredential.user.photoURL,
    userName: userCredential.user.displayName,
    email: userCredential.user.email
  }
}
const signInWithFaceBook = async () => {
  const userCredential = await signInWithPopup(auth, faceBookAuthProvider)
  const accessToken = await userCredential.user.getIdToken()
  localStorage.setItem('accessToken', accessToken)
  return {
    userImage: userCredential.user.photoURL,
    userName: userCredential.user.displayName,
    email: userCredential.user.email
  }
}
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
export {
  loginUser,
  signOutUser,
  signupUser,
  signInWithGoogle,
  signInWithFaceBook
}
