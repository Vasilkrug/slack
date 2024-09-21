import './formButton.scss';

enum TypeButton {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

type Props = {
    className?: string,
    text: string,
    img?: string,

}
const FormButton = ({text, img, className = ''}: Props) => {
    return (
        <button type={img ? TypeButton.BUTTON : TypeButton.SUBMIT} className={`form-button ${className}`}>
            {img ? <img src={img} alt='Image button'/> : null}
            {text}
        </button>
    );
};

export default FormButton;