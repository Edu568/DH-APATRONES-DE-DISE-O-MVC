const path = require('path');


let users = [
    {
        id: 1,
        name: "Juan",
    },

    {
        id: 2,
        name: "Mati",
    },
    {
        id: 3,
        name: "Daniel",
    },
    {
        id: 4,
        name: "Enzo",
    },
]

const userController = {
    user: (req, res) => {
        let userId = req.params.id;

        // find permite buscar un elemento dentro de un array
        let user = users.find(user => user.id === Number(userId))

        if(typeof user !== "undefined"){
            res.send(`Hola ${user.nombre}`)
        } else {
            res.send("No se encontro el usuario")
        }

        
    }
}



module.exports = userController;