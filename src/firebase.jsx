// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection, getDocs,setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCm_4-swjRmZvVMOUibziNEJNN6U0-bK2g",
  authDomain: "finance1-ba695.firebaseapp.com",
  projectId: "finance1-ba695",
  storageBucket: "finance1-ba695.appspot.com",
  messagingSenderId: "704941051210",
  appId: "1:704941051210:web:b04c4df02b2b3fc13245b3",
  measurementId: "G-B35JWM4W7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {db,auth,provider,getDocs,setDoc};