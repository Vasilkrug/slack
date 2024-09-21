import lang from '../../service/lang/eng/en.json';
import LogoImg from '../../assets/images/Logo.svg';
import {SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import {FirebaseError} from '@firebase/util'
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import fireBaseApp from '../../firebase/firebase.tsx';
import {addUser} from '../../store/slices/userSlice.ts';
import Logo from '../../components/logo/logo.tsx';
import Form from '../../components/form/form.tsx';
import FormInput from '../../components/formInput/formInput.tsx';
import AuthHelp from '../../components/authHelp/authHelp.tsx';
import FormError from '../../components/formError/formError.tsx';
import './join.scss';

export interface AuthForm {
    name: string,
    email?: string,
    password: string
}

const Join = () => {
    const [error, setError] = useState('');
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
            navigate('/');
        } catch (error) {
            if (error instanceof FirebaseError) {
                setError(error.code);
            }
        }
    }

    const submitError: SubmitErrorHandler<AuthForm> = data => {
        console.log(data)
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
                  onSubmit={handleSubmit(submit, submitError)}>
                <FormError error={error}/>
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
            <AuthHelp link={'/login'} text={lang.haveAccount} linkText={lang.signIn}/>
        </div>
    );
};

export default Join;