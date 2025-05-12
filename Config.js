/*
config.js
*/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVDYnkuT4ijwS3WLHGQvv2a-QXLs8EYBo",
  authDomain: "inf655-final-booking-website.firebaseapp.com",
  projectId: "inf655-final-booking-website",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
