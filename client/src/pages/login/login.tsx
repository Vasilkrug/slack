import Form from '../../components/form/form.tsx';
import lang from '../../service/lang/eng/en.json';
import './login.scss';
import FormInput from '../../components/formInput/formInput.tsx';
import LogoImg from '../../assets/images/Logo.svg';
import Logo from '../../components/logo/logo.tsx';
import {Link} from "react-router-dom";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {AuthForm} from "../join/join.tsx";

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
                <FormInput type={lang.email} register={register} error={errors.email?.message} placeholder={lang.enterEmail} labelName={lang.emailAddress}/>
                <FormInput type={lang.password} register={register} error={errors.password?.message} placeholder={lang.enterPassword} labelName={lang.password}/>
            </Form>
            <div className='auth-help'>
                <p className='auth-help__text'>{lang.dontHaveAccount}</p>
                <Link className='auth-help__link' to={'/join'}>{lang.signUp}</Link>
            </div>
        </div>
    );
};

export default Login