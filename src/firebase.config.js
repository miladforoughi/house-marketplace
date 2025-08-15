import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCALkiZdL0WIVSNScdjjUEsPBl2XMipd8I',
  authDomain: 'house-marketplace-e44bc.firebaseapp.com',
  projectId: 'house-marketplace-e44bc',
  storageBucket: 'house-marketplace-e44bc.firebasestorage.app',
  messagingSenderId: '216097240682',
  appId: '1:216097240682:web:8e97e8b17e81b7d4023c13',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
