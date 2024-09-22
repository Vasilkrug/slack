import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AppState} from '../../store/store.ts';
import './home.scss';
import Sidebar from '../../components/sidebar/sidebar.tsx';


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
            <Sidebar/>
            <div className="chats-list"></div>
            <div className="chat"></div>
        </div>
    );
};

export default Home;