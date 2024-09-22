import './sideBarNav.scss';

type Props = {
    children: string | JSX.Element | JSX.Element[];
}
const SideBarNav = ({children}: Props) => {
    return (
        <nav className='nav-list'>
            {children}
        </nav>
    );
};

export default SideBarNav;