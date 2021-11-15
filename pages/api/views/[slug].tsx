import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
  setDoc,
  doc,
  increment,
} from 'firebase/firestore/lite';

export default async (req, res) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_REACT_APP_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const slug = req.query.slug;
  const db = getFirestore(firebaseApp);

  await setDoc(doc(db, 'views', slug), {
    count: increment(1),
  });
};
