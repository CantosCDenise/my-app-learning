import express from "express"
import Joi from 'jo'

const app = express();
let port = 3000; 

app.use(express.json());        //con esto le decimos a la app qué vamos a utilizar

const cars = [
    {
        id: 1,
        brand: "Ford",
        model: "Mustang",
        year: "1964"
    },
    {
        id: 2,
        brand: "Chevrolet",
        model: "Camaro",
        year: "1969"
    },
    {
        id: 3,
        brand: "Dodge",
        model: "Charger",
        year: "1967"
    },
    {
        id: 4,
        brand: "Nissan",
        model: "Sentra",
        year: "2000"
    }
];

app.get("/api/cars", (req, res) => {
    res.send(cars);             //Aqui enviamos el objeto que tenemos
});

app.listen(port, () => {
    console.log(`servidor escuchando desde el puerto ${port} holis`);
}); 	//el escucha siempre es mejor que vaya el último