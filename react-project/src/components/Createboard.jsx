import axios from '../axios'
import React, { useState } from 'react'
import './CreateBoardStyles.css'
const Createboard = () => {
  const dogsesssion = JSON.parse(sessionStorage.getItem("user"));
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  

  const createBoard=(e)=>{
    e.preventDefault()
    console.log("버튼 클릭했다",title,content,imageUrl)
    axios.post("/createboard",{
      title : title,
      content : content,
      imgs : imageUrl,
      user : dogsesssion[0]
    })

    window.location.href = "/board";
  }
    // 이미지 불러오기

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
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
    <div className='BoardContainerss'>
      <h1>게시글 작성하기</h1>
      <hr></hr>
        <div class="mb-3 btitle">
          <label for="formGroupExampleInput" class="form-label titles">게시물 제목</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title input" onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        {/* 게시글 내용 */}
        
        {imageUrl && (
          <div className='imgmiri'>
            <img src={imageUrl} alt="" style={{ maxWidth: "100%" }} />
          </div>
        )}
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">게시글 내용</label>
          <textarea class="form-control boardcontent" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setContent(e.target.value)}></textarea>
        </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" onChange={imgChange}/>
          </div>
          <div className='imgmiribtn'><button className='btn-upload' onClick={uploadImg}>이미지 미리보기</button></div>
        
        <div className='mb-3 loginbox2'>
          <button type="submit" className="btn btn-primary btn2" onClick={createBoard}>작성</button>
        </div>
    </div>
  )
}

export default Createboard