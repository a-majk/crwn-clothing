// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import Button from '../../components/button/button.component'

import { 
    // auth, 
    signInWithGooglePopup, 
    // signInWithGoogleRedirect, 
    // createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form-component';


const SignIn = () => {
    // useEffect(() => 
    //     async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         };
    //     }, 
    // []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <Button buttonType='google' onClick={logGoogleUser}>
                Sign with Google Popup
            </Button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;