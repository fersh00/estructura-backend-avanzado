//TODO: crear app con express

/**
 * 1. importar express
 * 2. Crear app con express
 * 3. usar app.listen para abrir puertos
 */


import { connect } from './config.js'
//(1)
import express from 'express';
import carRoutes from './routes/carRoutes.js'

connect();

//(2)
const api = express();
api.use(express.json());

//(3)
api.listen(8000, () => {
    console.log('API corriendo en puerto 8000');
});
api.use('/cars', carRoutes)

api.get('/test', (req, res) => {
    res.send("hi test");
    console.log("Hi test desde terminal");
});

api.use(carRoutes);
