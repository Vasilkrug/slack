import lang from '../../service/lang/eng/en.json';
import googleImg from '../../assets/icons/google.svg';
import FormButton from '../formButton/formButton.tsx';
import './form.scss';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    title: string,
    text: string,
    className?: string,
    hasCheckBox: boolean,
    checkBoxText: string,
    type: string,
    onSubmit: () => void
}
const Form = ({children, title, text, className = '', hasCheckBox, checkBoxText, type, onSubmit}: Props) => {
    return (
        <form className={`${className}`} onSubmit={onSubmit}>
            <div className={`${className}__header`}>
                <h2 className={`${className}__title`}>{title}</h2>
                <p className={`${className}__text`}>{text}</p>
            </div>
            <div className={`${className}__body`}>
                {children}
            </div>
            <div className={`${className}__footer`}>
                {hasCheckBox ? <div className={`${className}__checkbox`} style={{marginBottom: '24px'}}>
                    <input type="checkbox"/>
                    <span>{checkBoxText}</span>
                </div> : null
                }
                <div className={`${className}__buttons`}>
                    <FormButton text={type === 'login' ? lang.signIn : lang.getStarted}
                                className={'form-button_black'}/>
                    <FormButton text={type === 'login' ? lang.signWithGoogle : lang.signUpWithGoogle}
                                className={'form-button_gray'} img={googleImg}/>
                </div>
            </div>
        </form>
    );
};

export default Form;