import lang from '../../service/lang/eng/en.json';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import fireBaseApp from '../../service/firebase/firebase.tsx';
import {FirebaseError} from '@firebase/util';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import {addUser} from '../../store/slices/userSlice.ts';
import {authErrors} from '../../helpers/helpers.ts';
import {googleAuth} from '../../service/auth/auth.ts';
import {paths} from '../../paths/paths.ts';
import Form from '../../components/form/form.tsx';
import AuthHelp from '../../components/authHelp/authHelp.tsx';
import FormInput from '../../components/formInput/formInput.tsx';
import Logo from '../../components/logo/logo.tsx';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthForm} from '../join/join.tsx';
import './login.scss';

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<AuthForm>();
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
            navigate(paths.toHome);
        } catch (error) {
            if (error instanceof FirebaseError) {
                toast.error(authErrors[error.code]);
            }
        }
    }

    const googleSignIn = async () => {
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
        <div className='page login-page'>
            <Logo/>
            <Form title={lang.loginFormTitle}
                  text={lang.loginFormText}
                  className={'login-form'}
                  hasCheckBox={true}
                  checkBoxText={lang.rememberMe}
                  type={lang.loginType}
                  onSubmit={handleSubmit(submit)}
                  signWithGoogle={googleSignIn}>
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
            <AuthHelp link={paths.toJoin} text={lang.dontHaveAccount} linkText={lang.signUp}/>
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
        </div>
    );
};

export default Login