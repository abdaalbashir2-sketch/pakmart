import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRGiTWyZxUGqa9T9gpSwqeCxuoS0LuDMg",
  authDomain: "pakmart-8698d.firebaseapp.com",
  projectId: "pakmart-8698d",
  storageBucket: "pakmart-8698d.firebasestorage.app",
  messagingSenderId: "321108786852",
  appId: "1:321108786852:web:da5371bccef87ee977f031"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
