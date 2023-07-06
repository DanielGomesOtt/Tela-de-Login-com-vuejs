const mysql = require('mysql2/promise');
require('dotenv').config()

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }
    const connection = await mysql.createConnection("mysql://"+process.env.USER+":"+process.env.PASSWORD+"@"+process.env.HOST+"/"+process.env.DB);
    global.connection = connection;
    return connection;
}

async function setUser(req){
    const conn = await connect();
    let sql = `INSERT INTO user (nome, email, senha, data_cadastro, status) VALUES (?, ?, ?, NOW(), 1)`;
    let result = await conn.query(sql, [req.body.nome, req.body.email, req.body.password]);
    return result;
}

async function verifyUser(email){
    const conn = await connect();
    let sql = 'SELECT * FROM user WHERE email = ? && status = 1';
    let row = await conn.query(sql, [email]);
    return row;
}




module.exports = {setUser, verifyUser};