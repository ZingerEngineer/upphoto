import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './configs/firebase_config'
import { getFirestore } from 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

const fireApp = initializeApp(firebaseConfig)
export const auth = getAuth(fireApp)
export const db = getFirestore(fireApp)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
