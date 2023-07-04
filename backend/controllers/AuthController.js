const jwt = require("./AuthToken");

function verifyToken(req, res){
    try{
        let token = req.headers.Authorization.split(' ');
        const verify = jwt.verify(token[1]);
        res.send(verify);
    }catch(err){
        res.sendStatus(500);
    }
}

module.exports = {verifyToken}