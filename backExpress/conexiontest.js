var mysql      = require('mysql');
var connection = mysql.createConnection({

  host     : 'localhost',
  database : 'lavorar',
  user     : 'root',
  password : ''
});

connection.connect(error=>{
    if (error ){
        throw error;
    }else{
        console.log('conexion exitosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }
});

  connection.query('SELECT * from categories', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
});

connection.end();

export {connection}