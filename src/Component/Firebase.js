import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCPiVK31GhpGwSzk6JQK6X38b9mMZCBuvk",
  authDomain: "sign-in-authentication-8363a.firebaseapp.com",
  databaseURL: "https://sign-in-authentication-8363a-default-rtdb.firebaseio.com",
  projectId: "sign-in-authentication-8363a",
  storageBucket: "sign-in-authentication-8363a.appspot.com",
  messagingSenderId: "654012045051",
  appId: "1:654012045051:web:dbcf4c194510057948c25e",
  measurementId: "G-XDQM0QYT2H"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export { db };
