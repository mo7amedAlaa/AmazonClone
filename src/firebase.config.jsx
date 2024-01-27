// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAikXMnIvQuyjzOubonVXdA46s7PSOpikw',
  authDomain: 'database-63cce.firebaseapp.com',
  projectId: 'database-63cce',
  storageBucket: 'database-63cce.appspot.com',
  messagingSenderId: '85179955135',
  appId: '1:85179955135:web:d1d54452a34d8aa729130a',
  measurementId: 'G-TNLWV3HJMB',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
