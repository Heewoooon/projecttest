import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const dogsesssion = JSON.parse(sessionStorage.getItem("user"));
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/"; // 로그아웃 후 페이지 새로고침
  };

  return (
    <>
      <nav className="sticky-top hfirst">
        <Link to={"/"}>
          <img className="logoimgssss"
            src="./logo1.png"
          />
            
        </Link>

        <ul className="nav justify-content-center">
          
        </ul>
        <div>
          <ul id="navbar">
            {dogsesssion == null ? (
              <>
                <li>
                <Link  to={"/board"}>community</Link>
                </li>

                {/* <li>
                  <Link to={"/iot"}>MyPet</Link>
                </li> */}

                <li>
                  <Link to={"/login"}>login</Link>
                </li>
                
                <li>
                  <Link to={"/join"}>join</Link>
                </li>

              </>
            ) : (
              <>
                <li>
                <Link  to={"/board"}>community</Link>
                </li>
                
                <li>
                  <Link to={"/iot"}>MyPet</Link>
                </li>
                
                <li >
                  <Link className="nav-link" to={"/mypage"}>
                    Mypage
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" onClick={handleLogout} to={"/"}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
