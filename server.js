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


app.post("/addmem",async (req,res)=> {
    console.log("회원가입 시도")
    let {id,pw,name,nick,phone} = req.body;
    let sql =`insert into user_info values(1,'${id}','${pw}','${name}','${nick}','${phone}')`

    try {
        const connection = await conn();
        // 이제 connection 객체를 사용하여 데이터베이스 작업을 수행할 수 있습니다.
        
        // 예: 간단한 쿼리 실행
        const result = await connection.execute(sql,[],{ autoCommit: true });
        console.log('Row inserted:', result.rowsAffected);

        // 연결 해제
        await connection.close();
    } catch (error) {
        console.error('데이터베이스 작업 중 오류가 발생했습니다:', error);
    }
})

//로그인
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

//게시판 목록
app.post("/boardloading",async (req,res)=>{
    console.log("게시판페이지 로딩")
    const data = req.body.message
    console.log(data)
    if (data == "boardloading") {
        let sql =`select b_idx,b_title,DBMS_LOB.SUBSTR(b_content, 3000, 1) as C1,DBMS_LOB.SUBSTR(b_content, 4000, 3001) as C2,user_id from board_info `
        try {
            const connection = await conn();
            // 이제 connection 객체를 사용하여 데이터베이스 작업을 수행할 수 있습니다.
            
            const result = await connection.execute(sql);
            const ans = result.rows
            let board = {title : [],
                    content : [],
                    content2 : [],
                    user : [],
                    bIdx : []
                }
            console.log(ans)
            for(let i=0;i<result.rows.length;i++){
                board.title.push(ans[i][1]);
                board.content.push(ans[i][2]);
                if (ans[i][3] != null) {
                    board.content2.push(ans[i][3]);
                }
                board.user.push(ans[i][2]);
                board.bIdx.push(ans[i][0])
            }
            console.log(board)
            res.json(board)

            // 연결 해제 null
            await connection.close();
        } catch (error) {
            console.error('데이터베이스 작업 중 오류가 발생했습니다:', error);
        }
    }
})


// 게시판 글 상세페이지
app.get(`/boardread`,async (req,res)=>{
    const data = req.query.bIdx;
    console.log("게시판 글 조회 시도",data)
    
    try {
        // 데이터 베이스 부분
        const connection = await conn();
        let sql =`select b_title,DBMS_LOB.SUBSTR(b_content, 3000, 1) as C1,DBMS_LOB.SUBSTR(b_content, 4000, 3001) as C2,CREATED_AT,B_VIEWS,B_LIKES,B_FILE,USER_ID
                    from board_info where b_idx = '${data}'`
        // 게시글 관련 정보 전송 부분
        const result = await connection.execute(sql);
        console.log("게시판 글 정보 : ",result.rows);
        const ans = result.rows

        await connection.close();

        const connection2 = await conn();
        // 댓글 관련 정보 전송 부분 
        let sql2 = `select USER_ID,CMT_CONTENT,CREATED_AT from comment_info where b_idx = '${data}'`
        const result2 = await connection2.execute(sql2);
        console.log("댓글 정보 :", result2.rows);
        if (result2.rows.length != 0 ) {
            const ans2 = result2.rows
            console.log(ans2)
            let comments = {
                user2 : [],
                comment : [],
                comment_time : []
            }
            for(let i=0;i<ans2.length;i++){
                comments.user2.push(ans2[i][0]);
                comments.comment.push(ans2[i][1]);
                comments.comment_time.push(ans2[i][2]);
            }
            console.log("comments",comments)
            res.json({
                // 게시글 정보
                title : ans[0][0],
                content : ans[0][1],
                content2 : ans[0][2],
                time : ans[0][3],
                views : ans[0][4],
                likes : ans[0][5],
                img : ans[0][6],
                user : ans[0][7],
                comments
            })
        }
        else {
            res.json({
                // 게시글 정보
                title : ans[0][0],
                content : ans[0][1],
                content2 : ans[0][2],
                time : ans[0][3],
                views : ans[0][4],
                likes : ans[0][5],
                img : ans[0][6],
                user : ans[0][7]
            })
        }
        // 연결 해제

        await connection2.close();
    } catch (error) {
        console.error('데이터베이스 작업 중 오류가 발생했습니다:', error);
    }

})

//댓글글 작성 
app.get('/commentcreate',async (req,res)=>{
    const text = req.query.text;
    const idx = req.query.bIdx;
    console.log(text,idx)
    try {
        const connection = await conn();
        // user_id 자리에는 세션에서 가져온 아이디값 가져올 예정
        let sql =`insert into comment_info(b_idx,CMT_CONTENT,cmt_likes,created_at,user_id) values('${idx}','${text}',10,sysdate,'user_id 0001')`
        const result = await connection.execute(sql,[],{ autoCommit: true });
        console.log('Row inserted:', result.rowsAffected);


        // 연결 해제
        await connection.close();
    } catch (error) {
        console.error('데이터베이스 작업 중 오류가 발생했습니다:', error);
    }

})

// 게시글 작성
app.post("/createboard",(req,res)=>{
    console.log("게시글 작성 버튼 서버에서 확인중")
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