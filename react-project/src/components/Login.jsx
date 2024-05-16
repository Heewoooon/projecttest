import React from 'react'
import './LoginStyles.css'

const Login = () => {
  return (
    <div className='container'>
      <h1>로그인</h1>
      <img id='imgcss' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDNfMjg3%2FMDAxNjg1Nzc0MDcwMDgz.zfaKm4c5lDDiy_r5JYLKvCA9EefCDwX85vFtBahiJfMg.lsBi5DXhjuGcJGOyxei2XwES2Se4GNp-3RhWJpnp1-4g.JPEG.2daenggu%2F311619686_170623702227257_1514842534332662795_n.jpg&type=a340'/>
      <div className='formBox'>
        <div class="mb-3 loginbox2">
          <label for="formGroupExampleInput" class="form-label">ID</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter ID" />
        </div>
        <div class="mb-3 loginbox2">
          <label for="formGroupExampleInput2" class="form-label ">PW</label>
          <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter Pw" />
        </div>
        <div className='mb-3 loginbox2'>
          <button type="button" class="btn btn-primary btn2">로그인</button>
        </div>
      </div>
    </div>
  )
}

export default Login