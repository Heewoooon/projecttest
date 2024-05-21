import React, { useEffect, useState } from 'react'
import './IoTStyles.css'
import axios from '../axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Iot = () => {
  const dogsesssion = JSON.parse(sessionStorage.getItem("user"));
  // 상태관리가 필요한 부분
  const [petlist,setPetlist] = useState({
    name : [],
    idx : []
  })
  const [petg,setPetg] = useState({
    weight : [],
    time : []
  })
  // 첫 렌더링시 가져와야 할 정보 : 펫 이름 리스트
  useEffect(()=>{
    console.log(dogsesssion)
    axios.post("/addpetlist",{
      user : dogsesssion[0]
    }).then((res)=>{
      console.log(res)
      setPetlist(...[{
        name : res.data.name,
        idx : res.data.idx
      }])
    })
    console.log(petlist)
  },[])

  // 그래프 부분
  const data = {
    labels: petg.time,
    datasets: [
      {
        label: '몸무게 데이터' ,
        data: petg.weight,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: '반려동물의 몸무게 데이터 그래프'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 20,
        }
      }
    }
  };
// 그래프 부분 끝
  const petWD = (e) =>{
    console.log("버튼 클릭",e.petnameitem)
    axios.post("/petWeDa",{
      idx : petlist.idx[petlist.name.indexOf(e.petnameitem)]
    }).then((res)=>{
      console.log(res)
      setPetg(...[{
        weight : res.data.weight,
        time : res.data.time
      }])
    })
  }
  return (
    <div className='iotcon'>
      <div >
        <h3>내가 키우는 반려동물</h3>
        {/* <hr /> */}
        {/* 펫 이름 리스트 버튼 부분 */}
        <ul class="nav justify-content-center">
          {petlist.name.map((petnameitem,index)=>(
            <li class="nav-item" key={index}>
              <button class="w-btn w-btn-skin" type="button" aria-current="page" onClick={()=>petWD({petnameitem})}>{petnameitem}</button>
            </li>
          ))}
        </ul>

          

      </div>
      {/* 그래프 부분 */}
      <div>
      <h2>반려동물 몸무게 그래프</h2>
      <Line data={data} options={options} />
    </div>

    </div>
  )
}

export default Iot