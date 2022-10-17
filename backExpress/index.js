
const express = require("express");

const morgan = require("morgan");

const cors = require('cors')

const mysql = require('mysql');
 
const app = express();

var connection = mysql.createConnection({

  host     : 'localhost',
  database : 'lavorar',
  user     : 'root',
  password : ''
});


//setting
app.set("appName", "tuto express");
app.set('port',1000);
app.set('view engine','ejs');

//middlware

//fx logger registra las ppeticiones que llegan al servidor
function logger(req, res, next) {
    console.log("fx logger(----------------------------------");
    console.log(
        `url capturada =  ${req.protocol}:// ${req.get("host")}${req.originalUrl} `
        );
        next();
    }
 
 //middelware
 //entienda Json
 //para cors
 //morgan : 

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(logger);

// routing
//************************** */

app.get('/infCategory',(req,res) =>{
  // const data = [{name: 'francisco'},{name:'emilio'},{name: 'rubii'}];
  connection.query('select * from reviews',function(err,rows,field){
    if(err) throw err;
    // res.render('index.ejs',{people: rows})
    res.json(rows)
  })   
})

// app.get("/", (req, res) => {
//   // console.log('first')
//   // crfeo un json
//   // res.json({
//   //   msj: " front ",
//   //   name: "francisco",
//   //   apellido: "rubilar",
//   // });
// });

app.post("/insert/category/:id", (req, res) => {
  // console.log(req.params);//param en json
  console.log("json redibido por post de postman:");
  connection.query('insert into categories ')
  console.log(req.body);
  console.log(`variable recibida por param: ${req.params.id} `);

  res.send("post recibido correctamente"); //retorna msj al servidor
});

app.put("/update/:id", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Put recibido </h1> ${req.params.id} ha sido actualizado`);
});

app.delete("/contact/:id", (req, res) => {
  console.log(req.params);

  res.send(`delete user ${req.params.id} se ha eliminado correctamente`);
});

app.get("/register", (req, res) => {
  res.send("register page");
});

app.use(express.static("public"));

app.listen(app.get('port'), () => {
  console.log(app.get("appName"));
  console.log('server port',app.get("port"));


});
