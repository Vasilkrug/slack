import Logo from '../logo/logo.tsx';
import {ReactSVG} from 'react-svg';
import {changeColorSvg} from '../../helpers/helpers.ts';
import chatImage from '../../assets/icons/chat.svg';
import phoneImage from '../../assets/icons/phone.svg';
import groupImage from '../../assets/icons/group.svg';
import settingsImage from '../../assets/icons/settings.svg';
import './sidebar.scss';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Logo height={34} width={34}/>
            <nav className='nav-list'>
                <a href=''>
                    <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={chatImage}/>
                </a>
                <a href=''>
                    <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={phoneImage}/>
                </a>
                <a href=''>
                    <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={groupImage}/>
                </a>
                <a href=''>
                    <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={settingsImage}/>
                </a>
            </nav>
            <div className='user-avatar-wrapper'>
                <div className='user-avatar'>
                    V
                </div>
            </div>
        </div>
    );
};

export default Sidebar;