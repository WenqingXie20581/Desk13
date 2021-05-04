const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
// const nodeRsa = require('node-rsa');
// const key = new nodeRsa({b: 512});

class Jwt {
    constructor(data) {
        this.data = data;
    }

    //生成token
    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, './privatekey.pem'));//私钥 可以自己生成
        // let cert = key.encrypt('test', '');
        let token = jwt.sign({
            data,
            exp: created + 60 * 30,
        }, cert, {algorithm: 'RS256'});
        return token;
    }

    // 校验token
    verifyToken() {
        let token = this.data;
        let cert = fs.readFileSync(path.join(__dirname, './public_key.pem'));//公钥 可以自己生成
        // let cert = key.encrypt('test', 'base64');
        let res;
        try {
            let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
            let {exp = 0} = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

module.exports = Jwt;
