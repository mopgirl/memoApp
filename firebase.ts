import ENV from './env.json';
import { initializeApp, getApps, getApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER,
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
