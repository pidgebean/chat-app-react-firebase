// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB7KIf07XgQnhMXqO7Xjex11IM8UytU9-I",
  authDomain: "chat-9e3b1.firebaseapp.com",
  projectId: "chat-9e3b1",
  storageBucket: "chat-9e3b1.appspot.com",
  messagingSenderId: "549938169520",
  appId: "1:549938169520:web:5aaa46b8e1bfbc51b85d75",
  measurementId: "G-RS1CDTB73R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const storage = getStorage();
