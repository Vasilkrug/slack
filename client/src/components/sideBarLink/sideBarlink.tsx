import {ReactSVG} from 'react-svg';
import {Link} from 'react-router-dom';
import {changeColorSvg} from '../../helpers/helpers.ts';
import './sideBarLink.scss';


type Props = {
    link: string,
    img: string
}

const SideBarLink = ({link, img}: Props) => {
    return (
        <Link to={link} className='sideBar-link'>
            <ReactSVG beforeInjection={(svg) => changeColorSvg(svg)} src={img}/>
        </Link>
    );
};

export default SideBarLink;