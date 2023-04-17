import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCvKVXGLXaFRH05-dr0WlNVNWXOIqdPxNo',
  authDomain: 'upphoto-34202.firebaseapp.com',
  projectId: 'upphoto-34202',
  storageBucket: 'upphoto-34202.appspot.com',
  messagingSenderId: '1063635387845',
  appId: '1:1063635387845:web:a25e8f5527a0f5572777ac',
  measurementId: 'G-ZG19N214SF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
