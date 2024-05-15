import './App.css';
import List from './components/List';
import Login from './components/Login';
import Main from './components/Main';
import {Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Main/>}></Route>
        <Route path = '/list' element={<List/>}></Route>
        <Route path = '/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
