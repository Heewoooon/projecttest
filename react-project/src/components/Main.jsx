import React from 'react';
import './MainStyles.css'


const Main = () => {
  // console.log(process.env.PUBLIC_URL)
  return (
    <div className="card-group ">
      <div className="card cardbox1" >
        <img src='/dogcomu.png' className="card-img-top"  />
        <div className="card-body">
          <a href="#" className="btn btn-primary">반려동물 게시판</a>
          <p class="card-text">설명1</p>
        </div>
      </div>

      <div className="card cardbox2" >
        <img src="/dogweight.png" className="card-img-top" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">반려동물 체중계</a>
          <p class="card-text">설명1</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
