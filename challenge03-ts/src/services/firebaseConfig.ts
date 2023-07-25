import { initializeApp } from "firebase/app";
import { getAuth, Auth, FacebookAuthProvider, GoogleAuthProvider, UserCredential, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAdZxGvM6PuHAJwhsPrt9onyE2ulK-LMyo",
    authDomain: "challenge3-compass-uol.firebaseapp.com",
    projectId: "challenge3-compass-uol",
    storageBucket: "challenge3-compass-uol.appspot.com",
    messagingSenderId: "907118642600",
    appId: "1:907118642600:web:25e5dd510f1f3c01c8899d"
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
const fbAuthProvider = new FacebookAuthProvider();
const gAuthProvider = new GoogleAuthProvider();

export const FacebookAuth = async (): Promise<UserCredential> => {
const fbAuth = await signInWithPopup(auth, fbAuthProvider);
return fbAuth;
};

export const GoogleAuth = async (): Promise<UserCredential> => {
const gAuth = await signInWithPopup(auth, gAuthProvider);
return gAuth;
};
