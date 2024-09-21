import lang from '../../service/lang/eng/en.json';
import LogoImg from '../../assets/images/Logo.svg';
import Form from '../../components/form/form.tsx';
import AuthHelp from '../../components/authHelp/authHelp.tsx';
import FormInput from '../../components/formInput/formInput.tsx';
import Logo from '../../components/logo/logo.tsx';
import {SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import {AuthForm} from '../join/join.tsx';
import './login.scss';

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<AuthForm>();

    const submit: SubmitHandler<AuthForm> = data => {
        console.log(data)
    }

    const submitError: SubmitErrorHandler<AuthForm> = data => {
        console.log(data)
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
                  onSubmit={handleSubmit(submit, submitError)}>
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
        </div>
    );
};

export default Login