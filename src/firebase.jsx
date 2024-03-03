// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbPwjIv_CJOHkLJTxJZd9eWdlwdvJY-RQ",
  authDomain: "chat-ee7b8.firebaseapp.com",
  projectId: "chat-ee7b8",
  storageBucket: "chat-ee7b8.appspot.com",
  messagingSenderId: "882552939727",
  appId: "1:882552939727:web:22a51e1ea7c15b62e943ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();