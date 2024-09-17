import Form from '../../components/form/form.tsx';
import engLang from '../../service/lang/eng/en.json';
import './login.scss';
import FormInput from '../../components/formInput/formInput.tsx';
import LogoImg from '../../assets/images/Logo.svg';
import Logo from '../../components/logo/logo.tsx';

const Login = () => {
    return (
        <div className='login-page'>
            <Logo img={LogoImg}/>
            <Form title={engLang.loginFormTitle} text={engLang.loginFormText} className={'login-form'}>
                <FormInput type={engLang.email} placeholder={engLang.enterEmail} labelName={engLang.emailAddress}/>
                <FormInput type={engLang.password} placeholder={engLang.enterPassword} labelName={engLang.password}/>
            </Form>
        </div>
    );
};

export default Login