import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  databaseURL: process.env.databaseURL,
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

const database = getDatabase(db);

const starCountRef = ref(database, '/');

export default starCountRef;
