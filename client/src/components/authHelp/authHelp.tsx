import {Link} from 'react-router-dom';
import './authHelp.scss';

type Props = {
    link: string,
    text: string,
    linkText: string
}
const AuthHelp = ({link, text, linkText}: Props) => {
    return (
        <div className='auth-help'>
            <p className='auth-help__text'>{text}</p>
            <Link className='auth-help__link' to={link}>{linkText}</Link>
        </div>
    );
};

export default AuthHelp;