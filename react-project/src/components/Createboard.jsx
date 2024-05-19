import axios from '../axios'
import React, { useState } from 'react'

const Createboard = () => {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [imgs,setImgs] = useState('')


  const createBoard=(e)=>{
    e.preventDefault()
    console.log("버튼 클릭했다",title,content,imgs)
    axios.post("/createboard",{
      title : title,
      content : content,
      imgs : imgs
    })
  }
  return (
    <div>
      <h1>게시글 작성하기</h1>
      <hr></hr>
      <form onSubmit={createBoard}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">게시물 제목</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">게시글 내용</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setContent(e.target.value)}></textarea>
        </div>
        <div class="mb-3">
        <label for="formFileMultiple" class="form-label">이미지 파일 선택</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple onChange={(e)=> setImgs(e.target.value)}/>
        </div>
        <div className='mb-3 loginbox2'>
          <button type="submit" className="btn btn-primary btn2">작성</button>
        </div>
      </form>
    </div>
  )
}

export default Createboard