import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0I0pHuY6zoNqCzVSU_PivrlaOUA3hsx4",
  authDomain: "moviegpt-da47c.firebaseapp.com",
  projectId: "moviegpt-da47c",
  storageBucket: "moviegpt-da47c.firebasestorage.app",
  messagingSenderId: "541085851802",
  appId: "1:541085851802:web:9db948f53a07521cb57f23",
  measurementId: "G-XH94VGB9LQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);