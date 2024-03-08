import mongoose from 'mongoose'

/**
 * 1. Crear un schema
 * 2. Crear modelo, asignando un nombre
 * 3. 
 */
//(1)
const carSchema = new mongoose.Schema({
    //Campo --> tipo de dato
    plate: String,
    model: String,
    brand: String,
    color: String,
    type: String,
    carType: String,
    vin: String,
    version: String
});

//(2)
//const Car = mongoose.model('Car', carSchema);
//export default Car;

export default mongoose.model('Car', carSchema);