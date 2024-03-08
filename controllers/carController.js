import Car from '../models/Car.js'

//Create

const createCar = async (req, res) => {
    /*
        brand: 'Nissan',
        carType: 'Sedan',
        color: 'White',
        model: 'Tsuru',
        plate: '111-aaaa',
        vin: 'gadgasdf',
        version: 'dsf 345',
*/

    const newCar = await Car.create(req.body);
    res.json(newCar);
};

//Read


//get all cars

const getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
}

//GET CAR BY ID
const getCarById = async (req, res) => {
    
    const car = await Car.findById(req.params.carId);
    res.json(car);
}

//update

const updateCar = async (req, res) => {
    const { carId } = req.params;
    const updatedCar = await Car.updateOne(
        {
        _id: carId
        }, 
    req.body
    );
    res.json(updatedCar);
};


//Exports

export { createCar, getAllCars, getCarById, updateCar }