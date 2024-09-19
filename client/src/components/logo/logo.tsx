type Props = {
    width?: number;
    height?: number;
    className?: string;
    img: string
}
const Logo = ({width = 57, height = 64, className = '', img}: Props) => {
    return (
        <div className={`me-logo ${className}`} style={{width: width, height: height}}>
            <img src={img} alt="Logo image"/>
        </div>
    );
};

export default Logo;