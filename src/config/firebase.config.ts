import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVnKwLcLVkd26xgh8iAQKhBALhBKZzJiU",
  authDomain: "club-ecommerce-99b6a.firebaseapp.com",
  projectId: "club-ecommerce-99b6a",
  storageBucket: "club-ecommerce-99b6a.appspot.com",
  messagingSenderId: "627795090635",
  appId: "1:627795090635:web:362fd1aaaa59afa3b70f4e"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
