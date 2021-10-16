const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');
const sqlite3 = require('sqlite3');

console.log("rootPath = %s", rootPath)

module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3000,
        jwtSecret: 'secretsecret',
        jwtSession: {
            session: false
        },
        loggerFormat: 'dev',
        db: new sqlite3.Database('db.sqlite3')
    },
    production: {
    }
};