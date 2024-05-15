const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: '../instantclient_11_2' });

async function connectToOracle() {
    try {
        // 연결 정보 설정
        const connection = await oracledb.getConnection({
            user: 'cgi_24IS_IoT3_p2_3',
            password: 'smhrd3',
            connectString: 'project-db-cgi.smhrd.com:1524'
        });

        console.log('Oracle 데이터베이스에 연결되었습니다.');

        // // 여기서 데이터베이스 작업을 수행합니다.
        // connection.execute(`SELECT * FROM board_info`,[],(err, result) => {
        //       if (err) {
        //         console.error('쿼리 실행 중 오류 발생:', err.message);
        //         doRelease(connection);
        //         return;
        //       }
        //       console.log('조회 결과:', result.rows);
        // })
        // 연결 해제
        // await connection.close();
        // console.log('연결이 닫혔습니다.');
    } catch (error) {
        console.error('Oracle 데이터베이스에 연결하는 중 오류가 발생했습니다:', error)
    }
}

connectToOracle();