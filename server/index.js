const express = require('express');
const morgan = require('morgan');

//se llama la base de datos
const { mongoose } = require('./database');

const app = express();


// CONDIGURACION DEL SERVIDOR
// set crea una variable port dentro de express
app.set('port', process.env.PORT || 4500);


// MIDDLEWARES
// conversion para que el servidor entienda los datos

// para decirle como queremos ver los mensajes en consola, cada que llega una peticion para por esta funcion
app.use(morgan('dev')); 

// para que el servidor entienda el formato json
app.use(express.json()); // los json llega atraves de request.body

//ROUTES
// el primer argumento es el namespace
app.use('/api/employees', require('./routes/employee.routes'));


// INICIANDO EL SERVER
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en puerto ' + app.get('port'));
});