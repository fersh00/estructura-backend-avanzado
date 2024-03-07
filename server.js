//TODO: crear app con express

/**
 * 1. importar express
 * 2. Crear app con express
 * 3. usar app.listen para abrir puertos
 */


//(1)
import express from 'express';

//(2)
const api = express();

//(3)
api.listen(8000, () => {
    console.log('API corriendo en puerto 8000');
});
