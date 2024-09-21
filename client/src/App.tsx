import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login.tsx'
import Join from './pages/join/join.tsx';
import Home from './pages/home/home.tsx';
import './App.scss'

const App = () => {
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' Component={Login}/>
                    <Route path='/join' Component={Join}/>
                    <Route path='/' Component={Home}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
