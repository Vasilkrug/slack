import './form.scss';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    title: string,
    text: string,
    className?: string,
}
const Form = ({children, title, text, className = ''}: Props) => {
    return (
        <form className={`auth-form ${className}`}>
            <div className='form-header'>
                <h2 className='form-title'>{title}</h2>
                <p className='form-text'>{text}</p>
            </div>
            <div className='form-body'>
                {children}
            </div>
            <div className='form-footer'>
            </div>
        </form>
    );
};

export default Form;