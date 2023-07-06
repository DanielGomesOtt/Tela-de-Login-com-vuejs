const jwt = require("./AuthToken");

function verifyToken(req, res){
    try{
        req.headers.authorization = req.headers.authorization.split(' ');
        const verify = jwt.verify(req.headers.authorization[1]);
        res.send(verify);
    }catch(err){
        res.send(false);
    }
}

module.exports = {verifyToken}