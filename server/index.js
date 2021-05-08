/*const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'compufisicaejemplo',
});

connection.connect(error => {
    if(error) throw error;
    console.log('Database server running!');
});

app.get('/', (req, res) => {
    res.send('Funciona!!!');
});

app

app.listen(PORT, () =>  console.log(`corriendo en puerto ${PORT}`));
*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 500,
    host:"localhost",
    user: "root",
    password: "root",
    database: "compufisicaejemplo",
    port: 3306
});

db.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSE');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    
    if(connection) connection.release();
    console.log('DB is Conected');
    return;
});

module.export = db;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

/*app.get("/", (req, res) => {
    //const sqlInsert = "INSERT INTO responsables VALUES (null,?,null,?,null,?,?,null)"
    //const sqlInsert = "INSERT INTO responsables VALUES (null,'Daniel',null,'Cosme',null,'pipecosme123','123456789',null);";
    const sqlInsert = "INSERT INTO responsables (nombre1, nombre2, apellido1, apellido2, correo, password) VALUES ('hh32hh', null, 'hhh2hh', 'hhhhhhh2hhh', 'hhhhhhh2hhhhhhhh')";
    db.query(sqlInsert, (err, result) => {
        res.send("Dato Insertado2");
    });
});*/

app.post("/api/insert", (req, res) => {

    const nombre1 = req.bodyParser.nombre1;
    const nombre2 = req.bodyParser.nombre2;
    const apellido1 = req.bodyParser.apellido1;
    const apellido2 = req.bodyParser.apellido2;
    const correo = req.bodyParser.correo;
    const password = req.bodyParser.password;

    const sqlInsert = "INSERT INTO responsables (nombre1, nombre2, apellido1, apellido2, correo, password) VALUES (?,null,?,null,?,?,?);";
    db.query(sqlInsert, [nombre1,apellido1,correo,password], (err, result) => {
        console.log(result);
    })
});

app.listen(3001, () => {
    console.log("corriendo en puerto 3001");
});