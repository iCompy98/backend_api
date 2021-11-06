const express =require('express');
const router = express.Router();

const mysqlConnection = require('../connectionDatabase');

//Consulta de todas las preguntas
router.get('/usuarios', (req, res) =>{
    mysqlConnection.query('SELECT * from usuarios', (err,rows,fields) =>{
        if(!err){
            return res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

//Consulta de una pregunta especifica
router.get('/usuarios/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * from usuarios where id = ?', [id], (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

module.exports = router;