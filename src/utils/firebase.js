import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export { auth };
