const express =require('express');
const router = express.Router();

const mysqlConnection = require('../connectionDatabase');

//Consulta de todas las preguntas
router.get('/preguntas', (req, res) =>{
    mysqlConnection.query('SELECT * from preguntas_test1', (err,rows,fields) =>{
        if(!err){
            return res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

function llamado(index,index2)
{
    var dato = [];
    const qeri = 'Select pregunta from preguntas_test1 where id >= ' +index.toString() + ' and <= ' +index2.toString();
    console.log(qeri);
    mysqlConnection.query(qeri, (err, rows) =>{
            if(!err){console.log(rows);}
            else
            {return err;}
    })
}

//Consulta de una pregunta especifica
router.get('/preguntas/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * from preguntas_test1 where id = ?', [id], (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});


module.exports = router;