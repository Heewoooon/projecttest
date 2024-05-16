import React from 'react'
import "./JoinStyle.css"

const Join = () => {
  return (
    <div className='container'>
      <h1>회원가입</h1>
      <img id='imgcss' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDNfMjg3%2FMDAxNjg1Nzc0MDcwMDgz.zfaKm4c5lDDiy_r5JYLKvCA9EefCDwX85vFtBahiJfMg.lsBi5DXhjuGcJGOyxei2XwES2Se4GNp-3RhWJpnp1-4g.JPEG.2daenggu%2F311619686_170623702227257_1514842534332662795_n.jpg&type=a340'/>
      <form>
        <div className='formbox'>
          <div class="mb-3 loginbox2">
            <label for="formGroupExampleInput" class="form-label doglabel">아이디</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="아이디를 입력해주세요"/>
          </div>
          <div class="mb-3 loginbox2">
            <label for="formGroupExampleInput2" class="form-label doglabel">비밀번호</label>
            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="비밀번호를 입력해주세요"/>
          </div>
          <div class="mb-3 loginbox2">
            <label for="formGroupExampleInput" class="form-label doglabel">비밀번호확인</label>
            <input type="password" class="form-control" id="formGroupExampleInput" placeholder="비밀번호를 확인해주세요"/>
          </div>
          <div class="mb-3 loginbox2">
            <label for="formGroupExampleInput" class="form-label doglabel">이름</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="이름을 입력해주세요"/>
          </div>
          <div class="mb-3 loginbox2">
            <label for="formGroupExampleInput2" class="form-label doglabel">닉네임</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="사용하실 닉네임을 입력해주세요"/>
          </div>
          <div class="mb-3 loginbox2">
            <label for="formGroupExampleInput" class="form-label doglabel">전화번호</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="전화번호를 입력해주세요"/>
          </div>
          <div className='mb-3 loginbox2'>
          <button type="button" class="btn btn-primary btn2">회원가입</button>
        </div>
        </div>
      </form>
    
  </div>
  )
}

export default Join