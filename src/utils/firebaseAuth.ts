import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'

const auth = getAuth()
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
}
const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const user = userCredential.user
  console.log(user)
}
export { loginUser, signOutUser, signupUser }
