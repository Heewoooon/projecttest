import React, { useState } from 'react'
import "./JoinStyle.css"
import axios from '../axios';

const Join = () => {

  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [pws,setPws] = useState('');
  const [name,setName] = useState('');
  const [nick,setNick] = useState('');
  const [phone,setPhone] = useState('');

  const handleAddmem=(e) => {
    e.preventDefault()
    console.log("로그인 버튼 클릭")

    axios.post("/addmem",{
      id : id,
      pw : pw,
      name : name,
      nick : nick,
      phone : phone
  })


  }
  return (
    <div className='container'>
      <h1>회원가입</h1>
      <img id='imgcss' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDNfMjg3%2FMDAxNjg1Nzc0MDcwMDgz.zfaKm4c5lDDiy_r5JYLKvCA9EefCDwX85vFtBahiJfMg.lsBi5DXhjuGcJGOyxei2XwES2Se4GNp-3RhWJpnp1-4g.JPEG.2daenggu%2F311619686_170623702227257_1514842534332662795_n.jpg&type=a340'/>
      <form onSubmit={handleAddmem}>
        <div className='formbox'>
          <div className="mb-3 loginbox2">
            <label htmlFor="formGroupExampleInput" className="form-label doglabel">아이디</label>
            <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="아이디를 입력해주세요" onChange={(e)=> setId(e.target.value)}/>
          </div>
          <div className="mb-3 loginbox2">
            <label htmlFor="formGroupExampleInput2" className="form-label doglabel">비밀번호</label>
            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="비밀번호를 입력해주세요" onChange={(e)=> setPw(e.target.value)}/>
          </div>
          <div className="mb-3 loginbox2">
            <label htmlFor="formGroupExampleInput" className="form-label doglabel">비밀번호확인</label>
            <input type="password" className="form-control" id="formGroupExampleInput3" placeholder="비밀번호를 확인해주세요" onChange={(e)=> setPws(e.target.value)}/>
          </div>
          <div className="mb-3 loginbox2">
            <label htmlFor="formGroupExampleInput" className="form-label doglabel">이름</label>
            <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="이름을 입력해주세요" onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="mb-3 loginbox2">
            <label htmlFor="formGroupExampleInput2" className="form-label doglabel">닉네임</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="사용하실 닉네임을 입력해주세요" onChange={(e)=> setNick(e.target.value)}/>
          </div>
          <div className="mb-3 loginbox2">
            <label htmlFor="formGroupExampleInput" className="form-label doglabel">전화번호</label>
            <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="전화번호를 입력해주세요" onChange={(e)=> setPhone(e.target.value)}/>
          </div>
          <div className='mb-3 loginbox2'>
          <button type="submit" className="btn btn-primary btn2">회원가입</button>
        </div>
        </div>
      </form>
    
  </div>
  )
}

export default Join