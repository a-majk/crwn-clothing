import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUWOG8edI4rMfNGJJD4C1smkCtKVZOD84",
    authDomain: "crwn-db-5fbd4.firebaseapp.com",
    projectId: "crwn-db-5fbd4",
    storageBucket: "crwn-db-5fbd4.appspot.com",
    messagingSenderId: "833428325837",
    appId: "1:833428325837:web:119678d0c6f59ccb79b084"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export  const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt
            });
        } catch (error){
            console.log('errorcreating the user', error.message);
        }
    } 
    return userDocRef;
}