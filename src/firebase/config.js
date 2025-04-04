import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXPogmJhceb6qKsTA8UEM1cX9MLAQAkeU",
  authDomain: "vue-blog-system-bc26c.firebaseapp.com",
  projectId: "vue-blog-system-bc26c",
  storageBucket: "vue-blog-system-bc26c.firebasestorage.app",
  messagingSenderId: "992590442389",
  appId: "1:992590442389:web:205924ba5b6ab7e03e909c",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth = firebase.auth();

export { db, timestamp, auth };
