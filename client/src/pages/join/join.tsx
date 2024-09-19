import Logo from "../../components/logo/logo.tsx";
import LogoImg from "../../assets/images/Logo.svg";
import Form from "../../components/form/form.tsx";
import lang from "../../service/lang/eng/en.json";
import FormInput from "../../components/formInput/formInput.tsx";
import './join.scss';
import {Link} from "react-router-dom";

const Join = () => {
    return (
        <div className='auth-page join-page'>
            <Logo img={LogoImg}/>
            <Form title={lang.signUp}
                  text={lang.startTrialDays}
                  className={'join-form'}
                  hasCheckBox={false}
                  checkBoxText={''}
                  type={lang.joinType}>
                <FormInput type={'text'} placeholder={lang.enterYourName} labelName={lang.name}/>
                <FormInput type={lang.email} placeholder={lang.enterEmail} labelName={lang.emailAddress}/>
                <FormInput type={lang.password} placeholder={lang.createPassword} labelName={lang.password}/>
            </Form>
            <div className='auth-help'>
                <p className='auth-help__text'>{lang.haveAccount}</p>
                <Link className='auth-help__link' to={'/login'}>{lang.signIn}</Link>
            </div>
        </div>
    );
};

export default Join;