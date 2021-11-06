const mysql = require('mysql2');
//Clase que genera la conexion con la BD
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'serviciosocial'
});

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Db is connected');
    }
});



module.exports = mysqlConnection;
