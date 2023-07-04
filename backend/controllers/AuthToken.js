require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.sign = payload => jwt.sign(payload, process.env.SECRET, {expiresIn: 86400});
exports.verify = token => {
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET, { expiresIn: 86400 });
      return decodedToken;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            // Retorna um erro 500 com uma mensagem personalizada
            return 500;
        } else {
            // Retorna um erro 500 com a mensagem original de erro
            return 500;
        }
    }
  };
