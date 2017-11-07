const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'gz-cdb-82as52er.sql.tencentcdb.com',
    port: 63719,
    user: 'root',
    password: 'idc!@#web',
    database: 'wxgame'
})

let query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log('mysql init failed')
                reject(err)
            } else {
                console.log('mysql init success')
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = { query }