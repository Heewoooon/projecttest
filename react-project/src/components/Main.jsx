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
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fcafe_2021_10_15_535%2F0edadd66-2d79-11ec-9524-505dacfbaa5c_01.jpg&type=ofullfill340_600_png" alt="" />
        </div>
        <div className='fdiv'>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fcafe_2021_10_15_535%2F0edadd66-2d79-11ec-9524-505dacfbaa5c_01.jpg&type=ofullfill340_600_png" alt="" />
        </div>
      </div>
  );
};

export default Main;
