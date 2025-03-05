import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCx3IRzmSKYAAyrgRLEma2PgZ3k-1ej5vg",
  authDomain: "jackschoolhub-new.firebaseapp.com",
  projectId: "jackschoolhub-new",
  storageBucket: "jackschoolhub-new.firebasestorage.app",
  messagingSenderId: "939596086474",
  appId: "1:939596086474:web:3fb05374f2a07c857e4833",
  measurementId: "G-2YSPKG3YW9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
