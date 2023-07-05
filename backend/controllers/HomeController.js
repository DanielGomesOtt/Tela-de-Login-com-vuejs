const jwt = require('./AuthToken.js');
const bcrypt = require('bcrypt');
const HomeModel = require('../models/HomeModel');


function hashPassword(password){
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}

async function setUser(req, res){
    const token = jwt.sign(req.body);
    if(token != 500){
        req.body.token = token;
        req.body.password = hashPassword(req.body.password);
        let existUser = await verifyUser(req.body.email);
        if(existUser == false){
            const result = await HomeModel.setUser(req);
            req.body.result = result;
            res.send(req.body);
        }else{
            req.body.error = 'error';
            res.send(req.body);
        }
            
    }else{
        req.body.error = 'error';
        res.send(req.body);
    }
}

async function verifyUser(email){
    const result = await HomeModel.verifyUser(email);
    if(result){
        if(result[0] && result[0][0] && result[0][0].email == email){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = {setUser};