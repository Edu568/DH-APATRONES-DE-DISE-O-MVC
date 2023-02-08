const path = require('path');

let productos = [
    {
        id: 1,
        name: "Coca Cola",
        price: 100,
        color: "Rojo",
    },
    {
        id: 2,
        name: "Pepsi",
        price: 100,
        color: "Azul",
    },
    {
        id: 3,
        name: "Fanta",
        price: 100,
        color: "Naranja",
    }
]

const productoController = {
    product: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/producto.html"));
    }
}

module.exports = productoController;