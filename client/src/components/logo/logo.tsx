import logoImage from '../../assets/images/Logo.svg';

type Props = {
    width?: number;
    height?: number;
    className?: string;
}

const Logo = ({width = 57, height = 64, className = '',}: Props) => {
    return (
        <div className={`me-logo ${className}`} style={{width: width, height: height}}>
            <img src={logoImage} alt='Logo image'/>
        </div>
    );
};

export default Logo;