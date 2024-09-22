import lang from '../../service/lang/eng/en.json';
import LogoImg from '../../assets/images/Logo.svg';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import {FirebaseError} from '@firebase/util'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import fireBaseApp from '../../service/firebase/firebase.tsx';
import {paths} from '../../paths/paths.ts';
import {addUser} from '../../store/slices/userSlice.ts';
import {authErrors} from '../../helpers/helpers.ts';
import {googleAuth} from '../../service/auth/auth.ts';
import Logo from '../../components/logo/logo.tsx';
import Form from '../../components/form/form.tsx';
import FormInput from '../../components/formInput/formInput.tsx';
import AuthHelp from '../../components/authHelp/authHelp.tsx';
import './join.scss';
import 'react-toastify/dist/ReactToastify.css';

export interface AuthForm {
    name: string,
    email?: string,
    password: string
}

const Join = () => {
    const {register, formState: {errors}, reset, handleSubmit} = useForm<AuthForm>();
    const auth = getAuth(fireBaseApp);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit: SubmitHandler<AuthForm> = async (data) => {
        const {name, email, password} = data;
        try {
            await createUserWithEmailAndPassword(auth, email as string, password);
            const user = auth.currentUser;
            if (user) {
                updateProfile(user, {
                    displayName: name
                });
                dispatch(addUser({userName: name, userEmail: email as string, userId: user.uid}));
            }
            reset();
            navigate(paths.toHome);
        } catch (error) {
            if (error instanceof FirebaseError) {
                toast.error(authErrors[error.code]);
            }
        }
    }

    const googleSignUp = async () => {
        const user = await googleAuth();
        if (!user) return;
        dispatch(addUser({
            userName: user.displayName as string,
            userEmail: user.email as string,
            userId: user.uid
        }));
        navigate(paths.toHome);
    }

    return (
        <div className='auth-page join-page'>
            <Logo img={LogoImg}/>
            <Form title={lang.signUp}
                  text={lang.startTrialDays}
                  className={'join-form'}
                  hasCheckBox={false}
                  checkBoxText={''}
                  type={lang.joinType}
                  onSubmit={handleSubmit(submit)}
                  signWithGoogle={googleSignUp}>
                <FormInput register={register}
                           error={errors.name?.message}
                           type={lang.name as 'name'}
                           placeholder={lang.enterYourName}
                           labelName={lang.name}/>
                <FormInput register={register}
                           error={errors.email?.message}
                           type={lang.email as 'email'}
                           placeholder={lang.enterEmail}
                           labelName={lang.emailAddress}/>
                <FormInput register={register}
                           error={errors.password?.message}
                           type={lang.password as 'password'}
                           placeholder={lang.createPassword}
                           labelName={lang.password}/>
            </Form>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
            <AuthHelp link={paths.toLogin} text={lang.haveAccount} linkText={lang.signIn}/>
        </div>
    );
};

export default Join;