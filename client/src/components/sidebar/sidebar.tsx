import Logo from '../logo/logo.tsx';
import chatImage from '../../assets/icons/chat.svg';
import phoneImage from '../../assets/icons/phone.svg';
import groupImage from '../../assets/icons/group.svg';
import settingsImage from '../../assets/icons/settings.svg';
import SideBarLink from '../sideBarLink/sideBarlink.tsx';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Logo height={34} width={34}/>
            <nav className='nav-list'>
                <SideBarLink link={''} img={chatImage}/>
                <SideBarLink link={''} img={phoneImage}/>
                <SideBarLink link={''} img={groupImage}/>
                <SideBarLink link={''} img={settingsImage}/>
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