import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import App from './components/Main';
import List from './components/List';
import Login from './components/Login';
import Main from './components/Main';
import { BrowserRouter, Link , Routes, Route} from 'react-router-dom';
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <List/>
        <BrowserRouter>
            <Link to={'/'}>main</Link>
            <Link to={'/login'}>login</Link>
            <Routes>
                <Route path = '/' element={<Main/>}></Route>
                <Route path = '/list' element={<List/>}></Route>
                <Route path = '/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

