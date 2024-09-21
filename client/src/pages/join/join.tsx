import Logo from "../../components/logo/logo.tsx";
import LogoImg from "../../assets/images/Logo.svg";
import Form from "../../components/form/form.tsx";
import lang from "../../service/lang/eng/en.json";
import FormInput from "../../components/formInput/formInput.tsx";
import './join.scss';
import {Link} from "react-router-dom";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";

export interface AuthForm {
    name: string,
    email?: string,
    password: string
}

const Join = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<AuthForm>();

    const submit: SubmitHandler<AuthForm> = data => {
        console.log(data)
    }

    const submitError: SubmitErrorHandler<AuthForm> = data => {
        // console.log(data)
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
                <FormInput register={register} error={errors.name?.message} type={'name'} placeholder={lang.enterYourName} labelName={lang.name}/>
                <FormInput register={register} error={errors.email?.message} type={lang.email as 'email'} placeholder={lang.enterEmail} labelName={lang.emailAddress}/>
                <FormInput register={register} error={errors.password?.message} type={lang.password as 'password'} placeholder={lang.createPassword} labelName={lang.password}/>
            </Form>
            <div className='auth-help'>
                <p className='auth-help__text'>{lang.haveAccount}</p>
                <Link className='auth-help__link' to={'/login'}>{lang.signIn}</Link>
            </div>
        </div>
    );
};

export default Join;