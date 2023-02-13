import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
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
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth, provider);

export const db = getFirestore();

export  const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;

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
                createdAt,
                ...additionalInfo
            });
        } catch (error){
            console.log('error creating the user', error.message);
        }
    } 
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
};