// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDnoo76nMTDznmqKFMttNcdHc6zdfzNZ4U",
  authDomain: "lab-maker-agendamento.firebaseapp.com",
  projectId: "lab-maker-agendamento",
  storageBucket: "lab-maker-agendamento.appspot.com",
  messagingSenderId: "968439920258",
  appId: "1:968439920258:web:223847ea5408f45122a69b",
  measurementId: "G-C1PVVJMM74"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

