import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Mypet.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mypet = () => {
  const [petname, setName] = useState([]);
  const [img, setImg] = useState([]);
  const [weight, setWeight] = useState([]);
  const [petday, setPetday] = useState([]);
  const [breed, setBreed] = useState([]);

  const dogsesssion = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    axios.post("/mydog", {
      user: dogsesssion[0]
    })
    .then((res) => {
      if (res.data.length !== 0) {
        setName(res.data.petName);
        setImg(res.data.img);
        setWeight(res.data.petW);
        setPetday(res.data.time);
        setBreed(res.data.breed);
      }
      console.log(res.data.img)
    });
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows : true
  }

  return (
    <div className="mypetMain">
      <h1>반려동물 리스트</h1>
      <hr />
      <div className="banner-slider matop">
        <Slider {...settings}>
            {img.map((imgitem,index)=>(
              <div key={index} className="slidercon">
                <div className="slideritem sitme1">
                  <img className="sliderinimg" src={imgitem}></img>
                </div>
                <div className="slideritem sitme2">
                    <h3>펫 정보</h3>
                      <p>이름 :{petname[index]}</p>
                      <p>체중 :{weight[index]}</p>
                      <p>날짜 :{petday[index]}</p>
                      <p>견종 :{breed[index]}</p>
                </div>
              </div>
            ))}
        </Slider>
        <div className="petliist">
          <h3>반려동물 리스트</h3>
          <hr />
          {img.map((imgitem, index) => (
            <div key={index} className="col petcontainner">
              <div className="card text-center card-body">
                <div className='divimg'>
                  <img src={imgitem} className="divimgimg" alt="이미지" />
                </div>
                <div className="slideritem sitme2">
                  <h3>펫 정보</h3>
                    <p>이름 :{petname[index]}</p>
                    <p>체중 :{weight[index]}</p>
                    <p>날짜 :{petday[index]}</p>
                    <p>견종 :{breed[index]}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Mypet;
