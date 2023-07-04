const jwt = require('./AuthToken.js');

async function setUser(req, res){
    const token = jwt.sign(req.body);
    if(token != 500){
        req.body.token = token;
        res.send(req.body);    
    }else{
        res.sendStatus(500);
    }
}

module.exports = {setUser};