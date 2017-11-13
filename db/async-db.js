const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'gz-cdb-82as52er.sql.tencentcdb.com',
    port: 63719,
    user: 'root',
    password: 'idc!@#web',
    database: 'wxgame'
})
const release = connection => {
    connection.end(function(error) {
        if (error) {
            console.log('Connection closed failed.');
        } else {
            console.log('Connection closed succeeded.');
        }
    });
};
const execQuery = sqlOptions => {
    var results = new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                console.log("Get connection from mysql pool failed !");
                throw error;
            }

            var sql = sqlOptions['sql'];
            var args = sqlOptions['args'];

            if (!args) {
                var query = connection.query(sql, (error, results) => {
                    if (error) {
                        console.log('Execute query error !');
                        throw error;
                    }

                    resolve(results);
                });
            } else {
                var query = connection.query(sql, args, function(error, results) {
                    if (error) {
                        console.log('Execute query error !');
                        throw error;
                    }

                    resolve(results);
                });
            }

            connection.release(function(error) {
                if (error) {
                    console.log('Mysql connection close failed !');
                    throw error;
                }
            });
        });
    }).then(function(chunk) {
        return chunk;
    });

    return results;
};
module.exports = {
    release: release,
    execQuery: execQuery
}