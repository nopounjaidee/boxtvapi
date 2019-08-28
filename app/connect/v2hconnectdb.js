var mysql = require('mysql');
 
const pool = mysql.createPool({
            connectionLimit : 10,
            host     : '96.30.124.200',
            user     : 'v2h',
            password : 'Dev2018@mvtv',
            database : 'v2h',
            debug    : false 
            });                    
 
function executeQuery(sql, callback) {
    pool.getConnection((err,connection) => {
        if(err) {
            return callback(err, null);
        } else {
            if(connection) {
                console.log("v2h DB Connection");
                connection.query(sql, function (error, results, fields) {
                connection.release();
                if (error) {
                    return callback(error, null);
                } 
                console.log("return results success");
                return callback(null, results);
                });
            }
        }
    });
}
 
function query(sql, callback) {    
    executeQuery(sql,function(err, data) {
        if(err) {
            return callback(err);
        }       
        callback(null, data);
    });
}
 
module.exports = {
    query: query
}