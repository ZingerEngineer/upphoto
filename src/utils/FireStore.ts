import {
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  DocumentData
} from '@firebase/firestore'
import { db } from '../index'

const createUser = async (userName: string, userEmail: string) => {
  try {
    const userRef = await addDoc(collection(db, 'users'), {
      userName,
      userEmail
    })
    console.log('Document written with ID: ', userRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
// create image link object for user:
// IF: does a user exist ?
//   Create new image link in the links object
// ELSE: Create new user.
//       Create new link in the links object.

const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'))
  const userArray: DocumentData[] = []
  querySnapshot.forEach((doc) => {
    userArray.push(doc.data())
  })
  return userArray
}
const getUser = async (userName: string) => {
  const querySnapshot = await getDocs(collection(db, 'users'))
  const userArray: DocumentData[] = []
  querySnapshot.forEach((doc) => {
    userArray.push(doc.data())
  })
  const user = userArray.filter((user) => user.userName === userName)[0]
    .userName
  return user
}
const createImageLinkForUser = async (userName: string) => {
  try {
    const user = await getUser(userName)
    const userRef = doc(db, 'users', user)
    console.log('userRef: ', userRef)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
export { createUser, createImageLinkForUser, getUsers, getUser }
