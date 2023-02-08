const path = require('path');

const controller = {
    index:(req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    
    contact:(req, res) => {
        res.send('pagina de contacto')
    }
}

module.exports = controller;