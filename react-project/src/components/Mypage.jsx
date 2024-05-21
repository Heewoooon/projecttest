import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import "./Mypage.css";



const Mypage = () => {
  const [petName, setPetName] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const ans = ''


  const addPet = (e) => {
    e.preventDefault();

    console.log("펫정보 등록")
    
    axios.post("/petinfo", {
      
      petName : petName,
      petWeight : petWeight,
      userid : JSON.parse(sessionStorage.getItem("user"))[0],
      petBreed : petBreed,
      imgs : imageUrl
    })
    
    alert("펫 등록에 성공하였습니다.")
    window.location.href = window.location.href;
  }

  const imgChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadImg = async () => {
    if (!selectedFile) {
      alert("이미지를 선택해 주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("img", selectedFile);
    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(response.data.imagePath);
      console.log(imageUrl)
      console.log("이미지 업로드 완료:", response.data);
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

 

  return (
    <div className="background">
        <h1 id="mypage">마이페이지</h1>
        <hr />
      <div className="Myitems">
        {/* 회원 관리 상자 */}
          {sessionStorage.getItem("user") && (
            <div className="cards1">
              <ul>
                <li>
                  <div className="imgdiv">
                    <img id="imgcss" src="https://cdn-icons-png.flaticon.com/512/159/159833.png" alt=""/>
                  </div>
                </li>
                <li>
                  <p className="userinfo">아이디 : {JSON.parse(sessionStorage.getItem("user"))[0]} </p>
                </li>
                <li>
                  <p className="userinfo">비밀번호 : {JSON.parse(sessionStorage.getItem("user"))[1]} </p>
                </li>
                <li>
                  <p className="userinfo">이름 : {JSON.parse(sessionStorage.getItem("user"))[3]}</p>
                </li>
                <li>
                  <p className="userinfo">전화번호 : {JSON.parse(sessionStorage.getItem("user"))[2]}</p>
                </li>
                <li>
                  <p className="userinfo">닉네임 : {JSON.parse(sessionStorage.getItem("user"))[4]}</p>
                </li>
              </ul>
            </div>
          )}


        {/* 펫 정보 상자 */}
        <div className="cards2">
          <h5>펫 등록</h5>
          <form onSubmit={addPet}>
            <div className="formbox">
              <div className="mb-3 loginbox2">
                <label htmlFor="formGroupExampleInput1" className="form-label doglabel">펫이름</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput1"
                  placeholder="이름입력"
                  onChange={(e)=>{setPetName(e.target.value)}}
                />
              </div>
              <div className="mb-3 loginbox2">
                <label htmlFor="formGroupExampleInput4" className="form-label doglabel">체중</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="체중입력" onChange={(e)=>{setPetWeight(e.target.value)}}/>
              </div>
              <div className="mb-3 loginbox2">
                <label htmlFor="formGroupExampleInput5" className="form-label doglabel">견종</label>
                <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="견종입력" onChange={(e)=>{setPetBreed(e.target.value)}}/>
              </div>
              {/* 사진 미리보기 */}
              {imageUrl && (
                <div className="image-up">
                  <img src={imageUrl} alt="" style={{ maxWidth: "100%" }} />
                </div>
              )}
              {/* 사진 업로드 부분 */}
              
              <div class="mb-3">
                <input class="form-control" type="file" id="formFile" onChange={imgChange}/>
              </div>
              <div className='imgmiribtn'><button className='btn-upload' onClick={uploadImg}>이미지 미리보기</button></div>
              <div className="mb-3 loginbox2">
                <button type="submit" className="btn-upload">펫등록</button>
              </div>
              <Link to={"/mypet"} className="linkStyle">
                <button className="btn-upload" type="button" style={{display: "block", margin:"0 auto" }} >펫 리스트</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
