import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Board from "./components/Board";
import Iot from "./components/Iot";
import Join from "./components/Join";
import LoginLose from "./components/LoginLose";
import Mypage from "./components/Mypage";
import BoradDetail from "./components/BoradDetail";
import Createboard from "./components/Createboard";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path = '/boardDetail/:board_idx' element={<BoradDetail />}></Route>
        <Route path="/iot" element={<Iot />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/loginlose" element={<LoginLose></LoginLose>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path = '/createboard' element={<Createboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
