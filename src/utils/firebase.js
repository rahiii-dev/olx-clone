import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaELwC1GetLBZQhYRqlfskqFtI6ttafrM",
  authDomain: "myapp-acfcd.firebaseapp.com",
  projectId: "myapp-acfcd",
  storageBucket: "myapp-acfcd.appspot.com",
  messagingSenderId: "972790748287",
  appId: "1:972790748287:web:9be4ef66457895a4449b4a"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; 
}

const auth = getAuth(app);

const db = getFirestore(app);
const PostCollection = collection(db, 'posts');

const storage = getStorage(app);

export { auth, PostCollection, storage };
