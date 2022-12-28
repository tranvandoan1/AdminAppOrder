import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAnplfbQAEJevKojKqady8Yj7nCawBhydk",
  authDomain: "orderappimage.firebaseapp.com",
  projectId: "orderappimage",
  storageBucket: "orderappimage.appspot.com",
  messagingSenderId: "673488420400",
  appId: "1:673488420400:web:673fa9963ddc8c09fbb7f5",
  measurementId: "G-1P6CT69ERX",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
