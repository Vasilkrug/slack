import './formButton.scss';

type Props = {
    className?: string,
    text:string,
    img?: string,

}
const FormButton = ({text, img, className = ''}: Props) => {
    return (
        <button className={`form-button ${className}`}>
            {img ? <img src={img} alt=""/> : null}
            {text}
        </button>
    );
};

export default FormButton;