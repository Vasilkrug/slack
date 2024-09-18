import Form from '../../components/form/form.tsx';
import lang from '../../service/lang/eng/en.json';
import './login.scss';
import FormInput from '../../components/formInput/formInput.tsx';
import LogoImg from '../../assets/images/Logo.svg';
import Logo from '../../components/logo/logo.tsx';

const Login = () => {
    return (
        <div className='login-page'>
            <Logo img={LogoImg}/>
            <Form title={lang.loginFormTitle}
                  text={lang.loginFormText}
                  className={'login-form'}
                  hasCheckBox={true}
                  checkBoxText={lang.rememberMe}>
                <FormInput type={lang.email} placeholder={lang.enterEmail} labelName={lang.emailAddress}/>
                <FormInput type={lang.password} placeholder={lang.enterPassword} labelName={lang.password}/>
            </Form>
            <div className='auth-help'>
                <p className='auth-help__text'>{lang.dontHaveAccount}</p>
                <a className='auth-help__link' href="">{lang.signUp}</a>
            </div>
        </div>
    );
};

export default Login