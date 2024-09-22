import lang from '../../service/lang/eng/en.json';
import LogoImg from '../../assets/images/Logo.svg';
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import fireBaseApp from '../../service/firebase/firebase.tsx';
import {FirebaseError} from '@firebase/util';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import {addUser} from '../../store/slices/userSlice.ts';
import {authErrors} from '../../helpers/helpers.ts';
import Form from '../../components/form/form.tsx';
import AuthHelp from '../../components/authHelp/authHelp.tsx';
import FormInput from '../../components/formInput/formInput.tsx';
import Logo from '../../components/logo/logo.tsx';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthForm} from '../join/join.tsx';
import './login.scss';

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<AuthForm>();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(fireBaseApp);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit: SubmitHandler<AuthForm> = async (data) => {
        const {email, password} = data;

        try {
            const user = await signInWithEmailAndPassword(auth, email as string, password);
            const {displayName: userName, email: userEmail, uid: userId} = user.user;
            if (!userName || !userEmail) return;
            dispatch(addUser({userName, userId, userEmail}))
            navigate('/');
        } catch (error) {
            if (error instanceof FirebaseError) {
                toast.error(authErrors[error.code]);
            }
        }
    }

    const signInWithGoogle = async () => {
        try {
            const request = await signInWithPopup(auth, provider);
            const user = request.user;
            dispatch(addUser({
                userName: user.displayName as string,
                userEmail: user.email as string,
                userId: user.uid
            }));
            navigate('/');
        } catch (error) {
            if (error instanceof FirebaseError) {
                toast.error(authErrors[error.code]);
            }
        }
    }

    return (
        <div className='auth-page login-page'>
            <Logo img={LogoImg}/>
            <Form title={lang.loginFormTitle}
                  text={lang.loginFormText}
                  className={'login-form'}
                  hasCheckBox={true}
                  checkBoxText={lang.rememberMe}
                  type={lang.loginType}
                  onSubmit={handleSubmit(submit)}
                  signWithGoogle={signInWithGoogle}>
                <FormInput type={lang.email as 'email'}
                           register={register}
                           error={errors.email?.message}
                           placeholder={lang.enterEmail}
                           labelName={lang.emailAddress}/>
                <FormInput type={lang.password as 'password'}
                           register={register}
                           error={errors.password?.message}
                           placeholder={lang.enterPassword}
                           labelName={lang.password}/>
            </Form>
            <AuthHelp link={'/join'} text={lang.dontHaveAccount} linkText={lang.signUp}/>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Login