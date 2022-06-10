import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeayBZhViwG55B8B1tugjuGCIJv9E2opU",
  authDomain: "fir-auth-5bf82.firebaseapp.com",
  projectId: "fir-auth-5bf82",
  storageBucket: "fir-auth-5bf82.appspot.com",
  messagingSenderId: "408985699622",
  appId: "1:408985699622:web:d4312a1429cc78e73b2de7"
};

// Initialize Firebase
let app;
app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export { auth };