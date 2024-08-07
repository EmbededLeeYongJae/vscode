const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

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

// 회원가입 엔드포인트
app.post('/register', async (req, res) => {
    const { email, password, phoneNumber, userId, photo, doj, dom, address, admin, activation, userName } = req.body;

    const query = `INSERT INTO USERS (U_NUM, EMAIL, U_PW, U_PHONE, U_ID, U_PHOTO, U_DOJ, U_DOM, U_ADD, ADMIN, ACTIVATION, U_NAME)
                   VALUES (USERS_SEQ.NEXTVAL, :email, :password, :phoneNumber, :userId, :photo, :doj, :dom, :address, :admin, :activation, :userName)`;

    try {
        const connection = await oracledb.getConnection();
        await connection.execute(query, {
            email,
            password,
            phoneNumber,
            userId,
            photo,
            doj: doj ? new Date(doj) : null,
            dom: dom ? new Date(dom) : null,
            address,
            admin,
            activation,
            userName
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