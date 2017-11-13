const mysql = require('./async-db')

const reportScore = async(userId) => {
    let mysqlOptions = {
        sql: 'select * from test where user_id = ?',
        args: [userId]
    };

    var res = await mysql.execQuery(mysqlOptions);
    if (res.length == 0) {
        return null;
    } else {
        return res;
    }
};
const getHistoryScore = async(user_openid) => {
    let mysqlOptions = {
        sql: 'select * from users where user_openid = ?',
        args: [user_openid]
    };
    var res = await mysql.execQuery(mysqlOptions);
    if (res.length == 0) {
        return null;
    } else {
        return res;
    }
}
module.exports = {
    reportScore: reportScore,
    getHistoryScore: getHistoryScore
};