import './formButton.scss';

enum TypeButton {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

type Props = {
    className?: string,
    text: string,
    img?: string,
    onClick?: () => void

}
const FormButton = ({text, img, className = '', onClick}: Props) => {
    return (
        <button onClick={onClick} type={img ? TypeButton.BUTTON : TypeButton.SUBMIT} className={`form-button ${className}`}>
            {img ? <img src={img} alt='Image button'/> : null}
            {text}
        </button>
    );
};

export default FormButton;