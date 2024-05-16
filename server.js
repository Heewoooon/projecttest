const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const conn = require("./DB/db");
const path = require("path");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'react-project', 'build')));
// app.use(express.static(__dirname));

app.get('/', (req, res) => {
    console.log(__dirname)
    app.use('index');
});

app.post("/logintry",async (req,res)=>{
    console.log("로그인 시도")
    let {id,pw} = req.body;

    let sql =`select user_nick from user_info where user_id = '${id}' and user_pw = '${pw}'`
    console.log(id,pw)
    // 여기서 데이터베이스 작업을 수행합니다.
    try {
        const connection = await conn();
        // 이제 connection 객체를 사용하여 데이터베이스 작업을 수행할 수 있습니다.
        
        // 예: 간단한 쿼리 실행
        const result = await connection.execute(sql);
        console.log(result.rows);
        res.json(result.rows[0])

        // 연결 해제
        await connection.close();
    } catch (error) {
        console.error('데이터베이스 작업 중 오류가 발생했습니다:', error);
    }

})



app.post("/datat", async (req,res)=>{
    console.log("데이터 전송 시도")
    const data = req.body.data
    const data2 = req.body.data2
    console.log(data)
    try {
        const response = await axios.post('http://192.168.219.177:5000/test', {'data' : data, 'data2' : data2});
        console.log(response.data);
        res.json({
            message: 'from flask',
            status: 'success',
            data: response.data,
            data2 : response.data2
        });
    } catch (error) {
        console.error(error);
        res.json({
            message: 'fail',
            status: 'fail',
        });
    }
})

app.post("/data",(req,res)=>{
    const receivedData = req.body;
    console.log("전송받은 데이터는",receivedData)

    const responseData = {'message' : 'Data received successfully!'}
    res.json(responseData);
})

app.get("/databasetest",(req,res)=>{
    console.log("디비 확인용 연결");
    
})

app.listen(3000, () => {
    console.log('Node.js server is running on port 3000');
})