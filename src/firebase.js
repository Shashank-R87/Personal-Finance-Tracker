import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQaQVNNGDRnCZhEOa1scv1wl70Su60wV0",
  authDomain: "personal-finance-tracker-21752.firebaseapp.com",
  projectId: "personal-finance-tracker-21752",
  storageBucket: "personal-finance-tracker-21752.appspot.com",
  messagingSenderId: "460699312433",
  appId: "1:460699312433:web:53eed0e1e8c903fb025010"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;