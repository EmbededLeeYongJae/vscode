const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Oracle 데이터베이스 연결 설정
const dbConfig = {
    user: 'your_oracle_user', // Oracle 사용자 이름
    password: 'your_oracle_password', // Oracle 비밀번호
    connectString: 'localhost/XEPDB1' // Oracle 데이터베이스 연결 문자열
};

// Oracle 데이터베이스 연결
async function initializeDatabase() {
    try {
        await oracledb.createPool(dbConfig);
        console.log('Oracle Database Connected...');
    } catch (err) {
        console.error('데이터베이스 연결 오류:', err.message);
        process.exit(1);
    }
}

initializeDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 사용자 ID 중복 확인 엔드포인트
app.post('/check-userid', async (req, res) => {
    const userid = req.body.userid;

    if (!userid) {
        return res.status(400).json({ error: 'ID가 필요합니다.' });
    }

    const query = 'SELECT COUNT(*) AS count FROM users WHERE userid = :userid';
    try {
        const connection = await oracledb.getConnection();
        const result = await connection.execute(query, [userid]);
        connection.close();

        if (result.rows[0].COUNT > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    } catch (err) {
        console.error('쿼리 실행 오류:', err.message);
        return res.status(500).json({ error: err.message });
    }
});

// 회원가입 엔드포인트
app.post('/register', async (req, res) => {
    const { userid, password, email, phoneNumber, username, birthdate } = req.body;

    const query = `INSERT INTO users (userid, password, email, phoneNumber, username, birthdate)
                   VALUES (:userid, :password, :email, :phoneNumber, :username, :birthdate)`;
    try {
        const connection = await oracledb.getConnection();
        await connection.execute(query, {
            userid,
            password,
            email,
            phoneNumber,
            username,
            birthdate
        }, { autoCommit: true });
        connection.close();

        return res.json({ success: true });
    } catch (err) {
        console.error('쿼리 실행 오류:', err.message);
        return res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});