import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login.tsx'
import Join from './pages/join/join.tsx';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={Login}/>
                <Route path="/join" Component={Join}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
