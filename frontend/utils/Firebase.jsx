import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ecommercelogin-3bb2b.firebaseapp.com",
  projectId: "ecommercelogin-3bb2b",
  storageBucket: "ecommercelogin-3bb2b.firebasestorage.app",
  messagingSenderId: "236523302462",
  appId: "1:236523302462:web:670d1bde9c671f798bab6f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, provider };
