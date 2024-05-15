import React from 'react'

const Login = () => {
  return (
    <div>
        <form action="/datat" method="POST">
          <h1>Node.js - flask 연동</h1>
          <input type="text" name="data"/> 시
          <input type="text" name="data2"/> 분
          <button>전송 버튼이겠냐?누르지마라아무것도안했으니까zzㅋㅋㅋㅋ</button>
      </form>
    </div>
  )
}

export default Login