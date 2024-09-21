import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AppState} from '../../store/store.ts';
import './home.scss';


const Home = () => {
    const user = useSelector((state: AppState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.userId) {
            navigate('/login');
        }
    }, [])
    return (
        <div>
            Home
        </div>
    );
};

export default Home;