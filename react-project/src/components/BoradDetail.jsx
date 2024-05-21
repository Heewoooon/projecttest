import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BoardDetailStyles.css'

const BoradDetail = () => {
  const dogsesssion = JSON.parse(sessionStorage.getItem("user"));
  const bIdx = useParams().board_idx;
  const [board,setBorad] = useState({
    idx : '',
    img : '',
    likes : '',
    time : '',
    title : '',
    user : '',
    views : '',
    content : ''
  })
  const [comment,setcomment] = useState({
    user2 : [],
    comment : [],
    time : []
  })

  useEffect(()=>{
    axios.get("/boardread",{
      params : {bIdx : bIdx}
    }).then((res)=>{
      console.log("res",res)
      if (res.data.content2 == null) {
        res.data.content2 = ""
      }
      setBorad({
        idx : res.data.idx,
        img : res.data.img,
        likes : res.data.likes,
        time : res.data.time,
        title : res.data.title,
        user : res.data.user,
        views : res.data.views,
        content : res.data.content + res.data.content2
      })
      if (res.data.comments) {
        setcomment({
          user2 : res.data.comments.user2,
          comment : res.data.comments.comment,
          time : res.data.comments.comment_time
        })
      }
    })
  },[])

  // 댓글 입력 부분
  const [inputComment,setinputComment] = useState('')
  const commentInput = (e) =>{
    e.preventDefault()
    if (dogsesssion != null) {
      console.log("댓글달기 버튼 눌렀네 내용꼬라지 한번 볼까?",inputComment)
      axios.get("/commentcreate",{params : {text : inputComment, bIdx : bIdx , user : dogsesssion[0]}})
      window.location.href = window.location.href;
    }else {
      alert("로그인이 필요한 서비스입니다.")
      window.location.href = window.location.href;
    }
  }
  return (

    <div className='BoardContainers'>
        {/* 게시판 상세페이지 */}
        <h1>{board.title}</h1>
        <div className='user-time'>
          <p className='user-time-item1'>{board.user}</p>
          <p className='user-time-item2'>{board.time}</p>
        </div>
        <hr />
        <div className='Boarditem'>
          <img src={board.img} className="card-img-top boardimg" alt="이미지" />
          <br/>
          <p>{board.content}</p>
        </div>
        <hr />
        {/* 댓글 입력 관련 */}

        <h5>댓글 입력</h5>
        <form onSubmit={commentInput}>
          <div className='inputcommentcon'>
            <textarea  type='textarea' className='inputcomment' onChange={(e)=>setinputComment(e.target.value)}></textarea >
            <button type='submit' className='commentinput w-btn w-btn-indigo'>댓글 입력</button>
          </div>
        </form>

        <hr />
        {/* 댓글 보여주는 부분 */}
        {comment.user2.map((commentItem,index)=>(
          <div >
          <div key={index} className='commentgroup user-time'>
            <p className='user-time-item1'>{commentItem}</p>
            <p className='user-time-item2'>{comment.time[index]}</p>
          </div> 
          <p className='commentcon'>{comment.comment[index]}</p>
          </div>
        ))
        }
    </div>
  )
}

export default BoradDetail