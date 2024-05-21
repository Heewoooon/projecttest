import React from 'react';
import './MainStyles.css'
import { Link } from 'react-router-dom';


const Main = () => {
  return (
      // <div className="card-group Maincontainer">   
      //   <div className="card Mainitems " >
      //     <img src='/dogcomu.png' className="card-img-top"  />
      //     <div className="card-body">
      //       <Link to={"/"} className="btn btn-primary">반려동물 게시판</Link>
      //       <p className="card-text">김성훈 이 멍청이!! 바보 똥개!!김성훈 이 멍청이!! 바보 똥개!!김성훈 이 멍청이!! 바보 똥개!!김성훈 이 멍청이!! 바보 똥개!!</p>
      //     </div>
      //   </div>  
      //   <div className="card Mainitems" >
      //     <img src="/dogweight.png" className="card-img-top" />
      //     <div className="card-body">
      //       <Link to={"/"} className="btn btn-primary">반려동물 체중계</Link>
      //       <p className="card-text">김성훈 이 멍청이!! 바보 똥개!!김성훈 이 멍청이!! 바보 똥개!!김성훈 이 멍청이!! 바보 똥개!!김성훈 이 멍청이!! 바보 똥개!!</p>
      //     </div>
      //   </div>
      // </div>
      <div className='Top'>
        <div className='fdiv'>
          <img src="/mainpage.jpg" alt=""  style={{height: '820px'}}/>
        </div>
        <div className='fdiv' style={{display: 'flex', flexDirection : 'column', justifyContent : 'center'}} >
          <div style={{display : 'flex', alignItems : 'center', flexDirection : 'row'}}>
            <div></div>
            <div>
              <img className='wimg' src="/main2.png" alt=""  style={{width : "650px"}}/>
            </div>
          </div>
          <div style={{display : 'flex', alignItems : 'center', flexDirection : 'row'}}>
            
              <div style={{flex : 1}}></div>
              <div>
                <img className='wimg' src="/main1.png" alt="" style={{width : "650px"}}/>
              </div>
            
        </div>
      </div>
      </div>
  );
};

export default Main;
