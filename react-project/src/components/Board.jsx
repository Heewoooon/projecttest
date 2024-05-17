import React, { useEffect, useState } from 'react'
import './BoardStyles.css'
import { Link } from 'react-router-dom'
import axios from '../axios'
const Board = () => {

  const [board,setBoard] = useState([])
  useEffect(()=>{
    axios.post("/boardloading",{
      message : 'boardloading'
    }).then((res)=> {
      console.log("react:",res)
      setBoard(res.data)
      })
  },[])
  console.log(board)
  return (
    <div>

    <div className='BoardContainer'>
    <h1>커뮤니티</h1>
      <hr />
      <ul id='navbar' className='justify-content-end'>
            <li>
              <Link  to={'/createboard'}>글작성</Link>
            </li>
      </ul>
      <div>
        {/* {board.map((item)=> {<p>{item[0]}</p>})} */}
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 Boards">
      <div className="col">
          <div className="card text-center">
          <img src='/dogcomu.png' className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card text-center">
          <img src='/dogcomu.png' className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
          <img src='/dogcomu.png' className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a  dlonger card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
          <img src='/dogcomu.png' className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
          <img src='/dogcomu.png' className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div aria-label="Page navigation example ">
        <ul className="pagination justify-content-center numlist">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Board