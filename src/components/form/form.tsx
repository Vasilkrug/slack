import './form.scss';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    title: string,
    text: string,
    className?: string,
}
const Form = ({children, title, text, className = ''}: Props) => {
    return (
        <form className={`${className}`}>
            <div className={`${className}__header`}>
                <h2 className={`${className}__title`}>{title}</h2>
                <p className={`${className}__text`}>{text}</p>
            </div>
            <div className={`${className}__body`}>
                {children}
            </div>
            <div className={`${className}__footer`}>
            </div>
        </form>
    );
};

export default Form;