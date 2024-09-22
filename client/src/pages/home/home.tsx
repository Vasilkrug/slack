import logoImage from '../../assets/images/Logo.svg';
import chatImage from '../../assets/icons/chat.svg';
import phoneImage from '../../assets/icons/phone.svg';
import groupImage from '../../assets/icons/group.svg';
import settingsImage from '../../assets/icons/settings.svg';
import {changeColorSvg} from '../../helpers/helpers.ts';
import {ReactSVG} from 'react-svg'
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AppState} from '../../store/store.ts';
import Logo from '../../components/logo/logo.tsx';
import './home.scss';


const Home = () => {
    const user = useSelector((state: AppState) => state.user);
    const navigate = useNavigate();


    // useEffect(() => {
    //     if (!user.userId) {
    //         navigate('/login');
    //     }
    // }, [])
    return (
        <div className='page home-page'>
            <div className="sidebar">
                <Logo img={logoImage} height={34} width={34}/>
                <nav className="nav-list">
                    <a href="">
                        <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={chatImage}/>
                    </a>
                    <a href="">
                        <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={phoneImage}/>
                    </a>
                    <a href="">
                        <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={groupImage}/>
                    </a>
                    <a href="">
                        <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={settingsImage}/>
                    </a>
                </nav>
                <div className="user-avatar-wrapper">
                    <div className="user-avatar">
                        V
                    </div>
                </div>
            </div>
            <div className="chats-list"></div>
            <div className="chat"></div>
        </div>
    );
};

export default Home;