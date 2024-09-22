import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {FirebaseError} from '@firebase/util';
import {toast} from 'react-toastify';
import {authErrors} from '../../helpers/helpers.ts';
import fireBaseApp from '../firebase/firebase.tsx';

const provider = new GoogleAuthProvider();
const auth = getAuth(fireBaseApp);

export const googleAuth = async () => {
    try {
        const request = await signInWithPopup(auth, provider);
        return request.user
    } catch (error) {
        if (error instanceof FirebaseError) {
            toast.error(authErrors[error.code]);
        }
    }
}