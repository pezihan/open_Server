const jwt = require('jsonwebtoken')

token = {
    en(str) { // 加密token
        let tokenKey = jwt.sign(str,'open');
        return tokenKey
    },
    de(token) { // 解密token
        try{
            let tokenKey = jwt.verify(token,'open')
            return {
                status: 'success',
                tokenKey
            }
        } catch {
            return {
                status: 'faile' 
            }
        }
    }
}

module.exports = token;